
const task = document.querySelector('[data-task]');

const createTask = (event) => {
  event.preventDefault()

  const input = document.querySelector('[data-form-input]')
  const content = input.value
  console.log(content)
  input.value = ''
};

const newTask = document.querySelector('[data-form-button]');

newTask.addEventListener('click', createTask());
