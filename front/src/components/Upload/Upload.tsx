import { useEffect, useState } from "react";
import { supabase } from "../../services/storage";
import css from "../../styles/perfilPage.module.css";
import { FaCamera } from "react-icons/fa";
import {FlexDiv, Popup} from '../index'
interface UploadProps {
  userEmail?: string;
}

export default function Upload({ userEmail }: UploadProps) {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [profilePictureUrl, setProfilePictureUrl] = useState<string | null>(
    null
  );

  const getProfilePictureUrl = (userEmail: string) => {
    const filePath = `profiles/${userEmail}.jpg`; // Define o caminho da imagem
    const { data: urlData } = supabase.storage
      .from("vitalu")
      .getPublicUrl(filePath); // Obtém a URL pública

    return urlData.publicUrl; // Retorna a URL pública
  };

  // Efeito para buscar a imagem de perfil ao montar o componente
  useEffect(() => {
    const fetchProfilePicture = () => {
      const url = getProfilePictureUrl(`${userEmail}`);
      if (url) {
        const uniqueUrl = `${url}?t=${new Date().getTime()}`; // Adiciona um timestamp para evitar cache
        
        fetch(uniqueUrl).then((res) => {
          if(res.status == 400) setProfilePictureUrl('./profile.png')
          else setProfilePictureUrl(uniqueUrl); // Atualiza a URL da imagem de perfil
        })
        .catch((err) => {
          setProfilePictureUrl('./profile.png');
          console.log("error on fetch url",err)
        })
      }
    };

    fetchProfilePicture();
  }, [userEmail]);

  // Manipulador de mudança de arquivo
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const selectedFile = event.target.files[0];
      if (selectedFile && selectedFile.type.startsWith("image/")) {
        if (selectedFile.size > 500 * 1024) {
          setError(
            "O tamanho do arquivo excede 500 KB. Por favor, escolha uma imagem menor."
          );
          return;
        }
        setFile(selectedFile); // Armazena o arquivo selecionado
        setError(null); // Limpa qualquer erro anterior
      } else {
        setError("Por favor, selecione um arquivo de imagem.");
      }
    }
  };

  // Manipulador de upload de imagem
  const handleUpload = async () => {
    if (!file || !userEmail) return; // Verifica se há arquivo e email

    setLoading(true); // Inicia o loading
    setError(null); // Limpa qualquer erro anterior

    const filePath = `profiles/${userEmail}.jpg`; // Caminho da imagem

    try {
      // Excluir imagem anterior, se existir
      const deleteResult = await supabase.storage
        .from("vitalu")
        .remove([filePath]);

      if (deleteResult.error) {
        console.error(
          `Erro ao excluir a imagem anterior: ${deleteResult.error.message}`
        );
      }

      // Fazer o upload da nova imagem
      const uploadResult = await supabase.storage
        .from("vitalu")
        .upload(filePath, file);

      if (uploadResult.error) {
        throw new Error(`Falha no upload: ${uploadResult.error.message}`);
      }

      const { data: urlData } = supabase.storage
        .from("vitalu")
        .getPublicUrl(filePath);

      if (!urlData || !urlData.publicUrl) {
        throw new Error("Erro ao obter a URL pública.");
      }

      // Atualiza a URL da imagem na tela, adicionando um timestamp para evitar cache
      const uniqueUrl = `${urlData.publicUrl}?t=${new Date().getTime()}`;
      setProfilePictureUrl(uniqueUrl);
    } catch (err) {
  // Atualiza o estado de erro
      console.log(err);
    } finally {
      setLoading(false); // Finaliza o loading
    }
  };

  return (
   
      <div className={css.img}>
      {profilePictureUrl && (
        
          <img
          className="img-responsive"
            src={profilePictureUrl}
            alt="Foto de perfil"
   
          />
   
      )}
      <Popup  Component={FaCamera} ButtonTitle="Editar Foto Perfil" className="edit-profile-img">
        <FlexDiv direction="column" gap="20px" margin="20px">

          <input type="file" onChange={handleFileChange} />{" "}
            {/* Campo para selecionar arquivo  precisa de ajuste css*/ }
            <button onClick={handleUpload} disabled={loading}>
              {loading ? "Enviando..." : "Enviar Imagem de Perfil"}
            </button>
            {error && <p style={{ color: "red" }}>{error}</p>}{" "}
            {/* Mensagem de erro */}
        </FlexDiv>
      </Popup>

    </div>
  );
}
