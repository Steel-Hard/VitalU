import { useState, useCallback } from 'react';

export const useLoadingButton = () => {
  const [isLoading, setIsLoading] = useState(false);

  // Função para executar uma ação com carregamento
  const executeWithLoading = useCallback(async (action: () => Promise<void>) => {
    setIsLoading(true);
    try {
      await action(); // Ação passada como parâmetro
    } catch (error) {
      console.error('Erro durante a execução:', error);
    } finally {
      setIsLoading(false); // Certifique-se de definir isLoading como false no final
    }
  }, []);

  return { isLoading, executeWithLoading };
};
