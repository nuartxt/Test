document.addEventListener('DOMContentLoaded', function () {
    const questionsContainer = document.getElementById('questions');
    const addQuestionBtn = document.getElementById('add-question');
    const createTestBtn = document.getElementById('create-test');

    addQuestionBtn.addEventListener('click', function () {
        const newQuestionDiv = document.createElement('div');
        newQuestionDiv.classList.add('question', 'mb-4');

        const questionInput = document.createElement('input');
        questionInput.type = 'text';
        questionInput.placeholder = 'Введите вопрос';
        questionInput.classList.add('form-control', 'question-input', 'mb-2');

        const addOptionBtn = document.createElement('button');
        addOptionBtn.textContent = 'Добавить вариант';
        addOptionBtn.classList.add('btn', 'btn-primary', 'add-option');

        const optionsDiv = document.createElement('div');
        optionsDiv.classList.add('options');

        const correctAnswersDiv = document.createElement('div');
        correctAnswersDiv.classList.add('correct-answers');

        newQuestionDiv.appendChild(questionInput);
        newQuestionDiv.appendChild(addOptionBtn);
        newQuestionDiv.appendChild(optionsDiv);
        newQuestionDiv.appendChild(correctAnswersDiv);

        questionsContainer.appendChild(newQuestionDiv);
    });

    createTestBtn.addEventListener('click', function () {
        const questions = [];
        const questionDivs = document.querySelectorAll('.question');

        questionDivs.forEach(questionDiv => {
            const questionInput = questionDiv.querySelector('.question-input');
            const optionsInputs = questionDiv.querySelectorAll('.options input');
            const correctAnswersCheckboxes = questionDiv.querySelectorAll('.correct-answers input:checked');

            const options = [];
            optionsInputs.forEach(input => {
                options.push(input.value);
            });

            const correctAnswers = [];
            correctAnswersCheckboxes.forEach(checkbox => {
                correctAnswers.push(checkbox.value);
            });

            const question = {
                question: questionInput.value,
                options: options,
                correctAnswers: correctAnswers
            };

            questions.push(question);
        });

        console.log('Созданный тест:', questions);
    });

    // Добавление поля для варианта ответа
    document.addEventListener('click', function (event) {
        if (event.target.classList.contains('add-option')) {
            const optionsDiv = event.target.parentElement.querySelector('.options');
            const optionInput = document.createElement('input');
            optionInput.type = 'text';
            optionInput.placeholder = 'Введите вариант';
            optionInput.classList.add('form-control', 'mb-2');
            optionsDiv.appendChild(optionInput);

            const correctAnswersDiv = event.target.parentElement.querySelector('.correct-answers');
            const optionCheckbox = document.createElement('input');
            optionCheckbox.type = 'checkbox';
            optionCheckbox.value = `Вариант ${optionsDiv.children.length}`;
            correctAnswersDiv.appendChild(optionCheckbox);
            correctAnswersDiv.appendChild(document.createTextNode(` Вариант ${optionsDiv.children.length}`));
            correctAnswersDiv.appendChild(document.createElement('br'));
        }
    });
});
