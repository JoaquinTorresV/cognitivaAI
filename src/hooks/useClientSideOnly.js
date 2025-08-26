/**
 * Hook para evitar errores de hidratación de Next.js
 * Solo renderiza contenido después de que el componente se monte en el cliente
 */

import { useState, useEffect } from 'react';

export function useClientSideOnly() {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  return hasMounted;
}

export default useClientSideOnly;