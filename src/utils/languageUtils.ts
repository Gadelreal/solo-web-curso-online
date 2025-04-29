
// Función para detectar el idioma del navegador o usar el idioma por defecto
export const detectLanguage = (): string => {
  const defaultLang = 'es';
  const supportedLangs = ['es', 'en'];
  
  // Intentar obtener el idioma del navegador
  let browserLang = navigator.language.split('-')[0];
  
  // Comprobar si el idioma está soportado
  if (!supportedLangs.includes(browserLang)) {
    return defaultLang;
  }
  
  return browserLang;
};

// Función para cambiar el idioma de la aplicación
export const changeLanguage = (lang: string): void => {
  // Aquí se implementaría la lógica para cambiar el idioma
  // Por ejemplo, almacenar el idioma seleccionado en localStorage
  localStorage.setItem('preferredLanguage', lang);
  
  // Recargar la página para aplicar el nuevo idioma
  // O usar un enfoque más sofisticado con contexto de React
  window.location.reload();
};

// Función para obtener el idioma actual
export const getCurrentLanguage = (): string => {
  const storedLang = localStorage.getItem('preferredLanguage');
  
  if (storedLang) {
    return storedLang;
  }
  
  return detectLanguage();
};
