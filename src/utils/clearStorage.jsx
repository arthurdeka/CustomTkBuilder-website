import { useEffect } from "react";


// Limpa o localStorage quando o componente é montado

export function clearStorage() {
  useEffect(() => {
    localStorage.clear();
  }, []);
}

export default { clearStorage };
