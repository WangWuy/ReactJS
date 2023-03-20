// useOAuth2.js
import { useCallback, useState } from 'react'; 

const useOAuth2 = (props) => {
  const {
      authorizeUrl,
      clientId,
      redirectUri,
      scope = '',
    } = props;

  const [{ loading, error }, setUI] = useState({ loading: false, error: null });

  const getAuth = useCallback(() => {
      // 1. Init
      setUI({
        loading: true,
        error: null,
      });
  })
}