$(document).ready(function() {
  const selectorsData = {
    "Грудь": [
      { value: '1', text: 'Выбрать' },
      { value: '2', text: 'Опция 2' },
      { value: '3', text: 'Опция 3' }
    ],
    "Спина": [
      { value: '4', text: 'Выбрать' },
      { value: '5', text: 'Опция 5' },
      { value: '6', text: 'Опция 6' }
    ],
    "Ноги": [
      { value: '7', text: 'Выбрать' },
      { value: '8', text: 'Опция 5' },
      { value: '9', text: 'Опция 6' }
    ],
    "Руки": [
      { value: '10', text: 'Выбрать' },
      { value: '11', text: 'Опция 5' },
      { value: '12', text: 'Опция 6' }
    ],
    "Плечи": [
      { value: '13', text: 'Выбрать' },
      { value: '14', text: 'Опция 5' },
      { value: '15', text: 'Опция 6' }
    ],
    "Другое": [
      { value: '16', text: 'Выбрать' },
      { value: '17', text: 'Опция 5' },
      { value: '18', text: 'Опция 6' }
    ],
  };

  const $container = $('.muscle-groups');

  for (const selector in selectorsData) {
    const $wrapper = $('<div>').addClass('muscle-group');
    const $title = $('<h2>').addClass('muscle-group__title').text(selector);
    const $selectElement = $('<select>').addClass('muscle-group__selector');

    for (const option of selectorsData[selector]) {
      const $optionElement = $('<option>').val(option.value).text(option.text);
      $selectElement.append($optionElement);
    }

    $wrapper.append($title, $selectElement);
    $container.append($wrapper);
  }
});