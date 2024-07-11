module.exports = {
  // Configuración global de ESLint
  globals: {
    // Configuración de variables globales específicas, como globals.browser
    // Asegúrate de definir globals.browser correctamente
    globals: 'globals.browser'
  },
  // Configuraciones recomendadas del plugin JS de ESLint
  extends: [
    'plugin:js/recommended'
    // Otras extensiones recomendadas si las necesitas
  ],
  // Reglas adicionales o personalizadas
  rules: {
    // Aquí puedes agregar reglas adicionales o personalizadas
    // Ejemplo:
    // 'constructor-super': 'error',
  },
};
