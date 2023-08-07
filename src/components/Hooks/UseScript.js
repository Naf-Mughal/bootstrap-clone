import { useEffect } from 'react';

const useScript = (url,integrity,crossorigin,referrerpolicy) => {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = url;
    script.async = true;
    script.integrity = integrity;
    script.crossOrigin = crossorigin;
    script.referrerPolicy = referrerpolicy;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, [crossorigin, integrity, referrerpolicy, url]);
};

export default useScript;
