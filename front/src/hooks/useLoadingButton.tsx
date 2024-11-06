import { useState} from 'react';

export const useLoadingButton = () => {
  const [loading, setLoading] = useState(false);

 

  return { loading, setLoading };
};
