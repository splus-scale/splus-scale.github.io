/**
 * Copia uma string para a área de transferência.
 * Tenta usar a API moderna navigator.clipboard.writeText.
 * Se falhar ou não estiver disponível, usa o método antigo (execCommand) como fallback.
 *
 * @param {string} text - A string a ser copiada.
 * @returns {Promise<void>} Uma Promise que resolve quando a cópia for bem-sucedida ou rejeita em caso de erro.
 */
function copyToClipboard(text) {
  if (navigator.clipboard && window.isSecureContext) {
    return navigator.clipboard.writeText(text).catch(() => {
      return copyToClipboardFallback(text);
    });
  } else {
    return copyToClipboardFallback(text);
  }
}

/**
 * Implementação do fallback usando document.execCommand('copy').
 * Cria um elemento <textarea> temporário, seleciona o texto e executa o comando.
 *
 * @param {string} texto - Texto a ser copiado.
 * @returns {Promise<void>}
 */
function copyToClipboardFallback(texto) {
  return new Promise((resolve, reject) => {
    const textarea = document.createElement('textarea');
    textarea.value = texto;
    textarea.style.position = 'fixed';   // Evita rolagem da página
    textarea.style.opacity = '0';        // Invisível
    textarea.style.left = '-999px';
    textarea.style.top = '0';
    document.body.appendChild(textarea);

    textarea.focus();
    textarea.select();

    try {
      const sucesso = document.execCommand('copy');
      if (sucesso) {
        resolve();
      } else {
        reject(new Error('Falha ao copiar usando o método antigo.'));
      }
    } catch (erro) {
      reject(erro);
    } finally {
      document.body.removeChild(textarea);
    }
  });
}


function copyString(text, successMessage, errorMessage) {
  return copyToClipboard(text)
    .then(() => {
      if (successMessage) {
        Toastify({
          text: successMessage,
          duration: 2500,
          close: true,
          gravity: "bottom", // `top` or `bottom`
          position: "right", // `left`, `center` or `right`
          stopOnFocus: true, // Prevents dismissing of toast on hover
          className: "bg-primary"
        }).showToast()
      }
    })
    .catch(() => {
      if (errorMessage) {
        Toastify({
          text: errorMessage,
          duration: 3000,
          close: true,
          gravity: "bottom", // `top` or `bottom`
          position: "right", // `left`, `center` or `right`
          stopOnFocus: true, // Prevents dismissing of toast on hover
          className: "bg-danger"
        }).showToast()
      }
    })
}


function init() {
  document.querySelectorAll('[data-copy-element]').forEach(e => {
    e.addEventListener('click', () => {
      const valEl = document.querySelector(e.dataset.copyElement)
      if (!!valEl) {
        copyString(valEl.textContent.trim(), e.dataset?.success, e.dataset?.error)
      }
    })
  })

  document.querySelectorAll('[data-copy-text]').forEach(e => {
    e.addEventListener('click', () => {
      copyString(e.copyText, e.dataset?.success, e.dataset?.error)
    })
  })
}


window.addEventListener('load', init)