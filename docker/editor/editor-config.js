window.onload = function () {
  // Build a system
  const editor = SwaggerEditorBundle({
    url: './data/swagger.yaml',
    dom_id: '#swagger-editor',
    layout: 'StandaloneLayout',
    presets: [
      SwaggerEditorStandalonePreset
    ],
  });
  window.editor = editor
};
