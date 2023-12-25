$(document).ready(function() {

  for (const selector in muscleGroupData) {
    const $muscleContainer = $('.muscle-groups');
    const $selectorMuscleWrapper = $('<div>').addClass('muscle-group');
    const $muscleGroupTitle = $('<h2>').addClass('muscle-group__title').text(selector);
    const $muscleGroupSelector = $('<select>').addClass('muscle-group__selector');

    const $optionSelect = $('<option>').val(0).text('Выбрать');
    $muscleGroupSelector.append($optionSelect);

    for (const option of muscleGroupData[selector]) {
      const $optionExercise = $('<option>').val(option.value).text(option.text);
      $muscleGroupSelector.append($optionExercise);
    }
    $selectorMuscleWrapper.append($muscleGroupTitle, $muscleGroupSelector);
    $muscleContainer.append($selectorMuscleWrapper);
  }
});

//Выбор title взависимости от выбранного option
$('.muscle-groups').on('change', '.muscle-group__selector', function(event) {
  let selectedExerciseText =  $(this).find('option:selected').text();
  const $exercisesTitle =  $('.exercises__title');
  $exercisesTitle.text(selectedExerciseText);
});




const muscleGroupData = {
  "Грудь": [
    {
      value: '1',
      text: "Жим штанги от груди широким хватом",
      image: [[], []],
      descr:
        "Жим штанги от груди широким хватом является базовым упражнением для развития грудных мышц. Для выполнения этого упражнения, лягте на скамью и возьмитесь за штангу широким хватом. Плавно опустите штангу к груди, затем верните ее в исходное положение, выпрямляя руки. Это упражнение активирует грудные мышцы, а также включает в работу плечевые и трехглавую мышцы плеча. Рекомендуется выполнять жим штанги от груди широким хватом в начале тренировки груди.",
    },
    {
      value: '2',
      text:  "Жим на вверх груди 45°",
      image: [[], []],
      descr:
        "Жим на вверх груди 45° направлен на развитие верхней части грудных мышц. Для выполнения этого упражнения, лягте на скамью с углом наклона 45° и возьмитесь за штангу. Опустите штангу к груди, затем поднимите ее вверх, выпрямляя руки. Это упражнение активирует верхнюю часть грудных мышц и плечевые мышцы. Рекомендуется выполнять жим на вверх груди 45° на среднем этапе тренировки груди.",
    },
    {
      value: '3',
      text: "Бабочка",
      image: [[], []],
      descr:
        "Бабочка является изолирующим упражнением для развития внутренней части грудных мышц. Для выполнения этого упражнения, сядьте на тренажер бабочка и возьмитесь за рукоятки. Сведите руки вперед, сжимая грудные мышцы, затем медленно вернитесь в исходное положение. Это упражнение активирует внутреннюю часть грудных мышц. Рекомендуется выполнять бабочку в конце тренировки груди.",
    },
    {
      value: '4',
      text: "Разводка гантелей на наклонной скамье",
      image: [[], []],
      descr:
        "Разводка гантелей на наклонной скамье является базовым упражнением для развития грудных мышц. Для выполнения этого упражнения, лягте на наклонную скамью и возьмитесь за гантели. Поднимите гантели вверх, сведя их вместе, затем медленно вернитесь в исходное положение. Это упражнение активирует грудные мышцы. Рекомендуется выполнять разводку гантелей на наклонной скамье на начальном этапе тренировки груди.",
    },
    {
      value: '5',
      text: "Жим гантелей от груди лежа на скамье",
      image: [[], []],
      descr:
        "Жим гантелей от груди лежа на скамье является базовым упражнением для развития грудных мышц. Для выполнения этого упражнения, лягте на скамью и возьмитесь за гантели. Плавно опустите гантели к груди, затем поднимите их вверх, выпрямляя руки. Это упражнение активирует грудные мышцы. Рекомендуется выполнять жим гантелей от груди лежа на скамье на начальном этапе тренировки груди.",
    },
  ],
  "Спина": [
    {
      value: '1',
      text: "Классическая становая тяга",
      image: [[], []],
      descr:
        "Классическая становая тяга является базовым упражнением для развития спины. Для выполнения этого упражнения, станьте прямо, ноги на ширине плеч. Согните колени и наклонитесь вперед, держа штангу на прямых руках. Поднимите штангу вверх, выпрямляя спину и сжимая лопатки. Затем медленно опустите штангу вниз. Это упражнение активирует мышцы спины, ягодицы и ноги. Рекомендуется выполнять классическую становую тягу на начальном этапе тренировки спины.",
    },
    {
      value: '2',
      text: "Тяга штанги к поясу",
      image: [[], []],
      descr:
        "Тяга штанги к поясу является базовым упражнением для развития спины. Для выполнения этого упражнения, станьте прямо, ноги на ширине плеч. Согните колени и наклонитесь вперед, держа штангу на прямых руках. Поднимите штангу к поясу, сжимая лопатки, затем медленно опустите ее вниз. Это упражнение активирует мышцы спины и предплечья. Рекомендуется выполнять тягу штанги к поясу на начальном этапе тренировки спины.",
    },
    {
      value: '3',
      text: "Тяга T грифа",
      image: [[], []],
      descr:
        "Тяга T грифа является базовым упражнением для развития спины. Для выполнения этого упражнения, станьте прямо, ноги на ширине плеч. Согните колени и наклонитесь вперед, держа гриф на прямых руках. Поднимите гриф к груди, сжимая лопатки, затем медленно опустите его вниз. Это упражнение активирует мышцы спины и предплечья. Рекомендуется выполнять тягу T грифа на начальном этапе тренировки спины.",
    },
    {
      value: '4',
      text: "Тяга гантели к поясу",
      image: [[], []],
      descr:
        "Тяга гантели к поясу является базовым упражнением для развития спины. Для выполнения этого упражнения, станьте прямо, ноги на ширине плеч. Согните колени и наклонитесь вперед, держа гантели на прямых руках. Поднимите гантели к поясу, сжимая лопатки, затем медленно опустите их вниз. Это упражнение активирует мышцы спины и предплечья. Рекомендуется выполнять тягу гантели к поясу на начальном этапе тренировки спины.",
    },
    {
      value: '5',
      text: "Тяга верхнего блока широким хватом",
      image: [[], []],
      descr:
        "Тяга верхнего блока широким хватом является базовым упражнением для развития спины. Для выполнения этого упражнения, сядьте на тренажер тяги верхнего блока и возьмитесь за рукоятку широким хватом. Потяните рукоятку к груди, сжимая лопатки, затем медленно вернитесь в исходное положение. Это упражнение активирует мышцы спины и предплечья. Рекомендуется выполнять тягу верхнего блока широким хватом на начальном этапе тренировки спины.",
    },
  ],
  "Ноги": [
    {
      value: '1',
      text: "Приседания со штангой",
      image: [[], []],
      descr:
        "Приседания со штангой являются базовым упражнением для развития нижней части тела. Для выполнения этого упражнения, станьте прямо, ноги на ширине плеч. Положите штангу на плечи, сгибая руки. Согните колени и опуститесь вниз, сохраняя спину прямой, затем поднимитесь вверх. Это упражнение активирует ягодичные мышцы, квадрицепсы и бедра. Рекомендуется выполнять приседания со штангой на начальном этапе тренировки ног.",
    },
     {
      value: '2',
      text: "Приседания со штангой в Смитта",
      image: [[], []],
      descr:
        "Приседания со штангой в Смитта являются базовым упражнением для развития нижней части тела. Для выполнения этого упражнения, станьте прямо в тренажере Смитта и возьмитесь за штангу. Согните колени и опуститесь вниз, сохраняя спину прямой, затем поднимитесь вверх. Это упражнение активирует ягодичные мышцы, квадрицепсы и бедра. Рекомендуется выполнять приседания со штангой в Смитта на начальном этапе тренировки ног.",
    },
    {
      value: '3',
      text: "Румынская тяга",
      image: [[], []],
      descr:
        "Румынская тяга является базовым упражнением для развития нижней части спины и ягодичных мышц. Для выполнения этого упражнения, возьмитесь за штангу с прямыми руками и станьте прямо. Наклонитесь вперед, сохраняя спину прямой, и опустите штангу вниз, пока не почувствуете натяжение в спине и ягодицах. Затем поднимите штангу вверх, выпрямляя спину. Рекомендуется выполнять румынскую тягу на среднем этапе тренировки ног.",
    },
    {
      value: '4',
      text: "Разгибания в тренажере",
      image: [[], []],
      descr:
        "Разгибания в тренажере являются изолирующим упражнением для развития задней части бедра. Для выполнения этого упражнения, сядьте на тренажер разгибаний и поставьте голень на подушку. Разгибайте ногу, поднимая голень вверх, затем медленно опускайте ее вниз. Это упражнение активирует заднюю часть бедра. Рекомендуется выполнять разгибания в тренажере на конце тренировки ног.",
    },
   {
    value: '5',
    text: "Жим платформы ногами",
      image: [[], []],
      descr:
        "Жим платформы ногами является базовым упражнением для развития нижней части тела. Для выполнения этого упражнения, сядьте на тренажер жима платформы ногами и поместите стопы на платформу. Выпрямите ноги, отталкиваясь от платформы, затем медленно согните их. Это упражнение активирует ягодичные мышцы, квадрицепсы и бедра. Рекомендуется выполнять жим платформы ногами на среднем этапе тренировки ног.",
    },
  ],
  "Руки": [
    {
      value: '1',
      text:  "Сгибания штанги на бицепс прямым грифом",
      image: [[], []],
      descr:
        "Сгибания штанги на бицепс прямым грифом являются базовым упражнением для развития бицепса. Для выполнения этого упражнения, станьте прямо, ноги на ширине плеч. Возьмите штангу прямым хватом, согните руки и поднимите штангу к плечам, сжимая бицепсы. Затем медленно опустите штангу вниз. Это упражнение активирует бицепсы. Рекомендуется выполнять сгибания штанги на бицепс прямым грифом на начальном этапе тренировки рук.",
    },
    {
      value: '2',
      text:  "Сгибания z штанги на бицепс",
      image: [[], []],
      descr:
        "Сгибания z штанги на бицепс являются базовым упражнением для развития бицепса. Для выполнения этого упражнения, станьте прямо, ноги на ширине плеч. Возьмите штангу хватом с поднятыми пальцами, согните руки и поднимите штангу к плечам, сжимая бицепсы. Затем медленно опустите штангу вниз. Это упражнение активирует бицепсы. Рекомендуется выполнять сгибания z штанги на бицепс на начальном этапе тренировки рук.",
    },
    {
      value: '3',
      text: "Молотки на бицепс",
      image: [[], []],
      descr:
        "Молотки на бицепс являются базовым упражнением для развития бицепса и предплечий. Для выполнения этого упражнения, станьте прямо, ноги на ширине плеч. Возьмите гантели в руки с нейтральным хватом, согните руки и поднимите гантели к плечам, сжимая бицепсы. Затем медленно опустите гантели вниз. Это упражнение активирует бицепсы и предплечья. Рекомендуется выполнять молотки на бицепс на среднем этапе тренировки рук.",
    },
  {
    value: '4',
    text: "Разгибания рук на верхнем кроссовере",
      image: [[], []],
      descr:
        "Разгибания рук на верхнем кроссовере являются изолирующим упражнением для развития трехглавой мышцы плеча. Для выполнения этого упражнения, станьте прямо, ноги на ширине плеч. Возьмите рукоятки верхнего кроссовера и выпрямите руки вперед, разведя их в стороны. Затем медленно согните руки, вернув их в исходное положение. Это упражнение активирует трехглавую мышцу плеча. Рекомендуется выполнять разгибания рук на верхнем кроссовере на конце тренировки рук.",
    },
  {
    value: '5',
    text: "Сгибание запястий на скамье ладонями вверх",
      image: [[], []],
      descr:
        "Сгибание запястий на скамье ладонями вверх является изолирующим упражнением для развития предплечий. Для выполнения этого упражнения, сядьте на скамью и возьмитесь за штангу ладонями вверх. Согните запястья, поднимая штангу вверх, затем медленно опустите ее вниз. Это упражнение активирует предплечья. Рекомендуется выполнять сгибание запястий на скамье ладонями вверх на конце тренировки рук.",
    },
  ],
  "Плечи": [
    {
      value: '1',
      text:  "Разводки гантель в стороны",
      image: [[], []],
      descr:
        "Разводки гантель в стороны являются базовым упражнением для развития плечевых мышц. Для выполнения этого упражнения, станьте прямо, ноги на ширине плеч. Возьмите гантели в руки и поднимите их в стороны, параллельно полу, затем медленно опустите гантели вниз. Это упражнение активирует плечевые мышцы. Рекомендуется выполнять разводки гантель в стороны на начальном этапе тренировки плеч.",
    },
  {
    value: '2',
    text:  "Обратная бабочка",
      image: [[], []],
      descr:
        "Обратная бабочка является изолирующим упражнением для развития задней части плеч. Для выполнения этого упражнения, сядьте на тренажер обратной бабочки и возьмитесь за рукоятки. Разведите руки назад, сжимая заднюю часть плеч, затем медленно вернитесь в исходное положение. Это упражнение активирует заднюю часть плеч. Рекомендуется выполнять обратную бабочку на конце тренировки плеч.",
    },
  {
    value: '3',
    text:  "Жим гантелей стоя",
      image: [[], []],
      descr:
        "Жим гантелей стоя является базовым упражнением для развития плечевых мышц. Для выполнения этого упражнения, станьте прямо, ноги на ширине плеч. Возьмите гантели в руки и поднимите их вверх, выпрямляя руки. Затем медленно опустите гантели вниз. Это упражнение активирует плечевые мышцы. Рекомендуется выполнять жим гантелей стоя на среднем этапе тренировки плеч.",
    },
  {
    value: '4',
    text:  "Протяжка штанги к подбородку",
      image: [[], []],
      descr:
        "Протяжка штанги к подбородку является базовым упражнением для развития плечевых мышц. Для выполнения этого упражнения, станьте прямо, ноги на ширине плеч. Возьмите штангу прямым хватом, согните руки и поднимите штангу к подбородку, сжимая плечи. Затем медленно опустите штангу вниз. Это упражнение активирует плечевые мышцы. Рекомендуется выполнять протяжку штанги к подбородку на начальном этапе тренировки плеч.",
    },
    {
      value: '5',
      text: "Жим штанги сидя в Смитта",
      image: [[], []],
      descr:
        "Жим штанги сидя в Смитта является базовым упражнением для развития плечевых мышц. Для выполнения этого упражнения, сядьте на скамью в тренажере Смитта и возьмитесь за штангу. Поднимите штангу вверх, выпрямляя руки, затем медленно опустите ее вниз. Это упражнение активирует плечевые мышцы. Рекомендуется выполнять жим штанги сидя в Смитта на среднем этапе тренировки плеч.",
    },
  ],
  "Другое": [
    {
      value: '1',
      text:"Скручивания",
      image: [[], []],
      descr:
        "Скручивания являются базовым упражнением для развития пресса. Для выполнения этого упражнения, лягте на спину и согните колени. Поднимите верхнюю часть тела, сжимая пресс, затем медленно опустите ее вниз. Это упражнение активирует пресс. Рекомендуется выполнять скручивания на конце тренировки пресса.",
    },
    {
      value: '2',
      text: "Молитва",
      image: [[], []],
      descr:
        "Молитва является изолирующим упражнением для развития трехглавой мышцы плеча. Для выполнения этого упражнения, сядьте на скамью и сведите руки вместе перед грудью, сжимая трехглавую мышцу плеча. Затем медленно разведите руки в стороны, растягивая мышцу. Это упражнение активирует трехглавую мышцу плеча. Рекомендуется выполнять молитву на конце тренировки плеч.",
    },
    {
      value: '3',
      text: "Сгибания шеи с блином",
      image: [[], []],
      descr:
        "Сгибания шеи с блином являются изолирующим упражнением для развития шеи. Для выполнения этого упражнения, сядьте на скамью и возьмитесь за блин. Согните шею вперед, сжимая шею, затем медленно вернитесь в исходное положение. Это упражнение активирует шею. Рекомендуется выполнять сгибания шеи с блином на конце тренировки шеи.",
    },
    {
      value: '4',
      text:"Подьемы коленей в висе",
      image: [[], []],
      descr:
        "Подъемы коленей в висе являются базовым упражнением для развития мышц живота. Для выполнения этого упражнения, висните на перекладине и поднимайте колени к груди, сжимая мышцы живота. Затем медленно опускайте ноги вниз. Это упражнение активирует мышцы живота. Рекомендуется выполнять подъемы коленей в висе на конце тренировки живота.",
    },
    {
      value: '5',
      text:"Передний мост для шеи",
      image: [[], []],
      descr:
        "Передний мост для шеи является изолирующим упражнением для развитияшеи. Для выполнения этого упражнения, станьте на четвереньки, опустите локти на пол и положите подбородок на ладони. Напрягите шею и поднимите голову вверх, затем медленно опустите ее вниз. Это упражнение активирует шею и шею. Рекомендуется выполнять передний мост для шеи на конце тренировки шеи и шеи.",
    },
  ],
};