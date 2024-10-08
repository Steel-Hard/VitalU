import { useState, useCallback } from 'react';

export const useLoadingButton = () => {
  const [isLoading, setIsLoading] = useState(false);

  // Função para iniciar o carregamento
  const startLoading = useCallback(() => setIsLoading(true), []);

  // Função para parar o carregamento
  const stopLoading = useCallback(() => setIsLoading(false), []);

  // Função para executar uma ação com carregamento
  const executeWithLoading = useCallback(async (action: () => Promise<void>) => {
    startLoading();
    try {
      await action(); // Ação passada como parâmetro
    } catch (error) {
      console.error('Erro durante a execução:', error);
    } finally {
      stopLoading();
    }
  }, [startLoading, stopLoading]);

  return { isLoading, executeWithLoading };
};
