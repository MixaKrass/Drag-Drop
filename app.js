const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder');

item.addEventListener('dragstart', dragstart);
item.addEventListener('dragend', dragend);

for (const placeholder of placeholders) {
  placeholder.addEventListener('dragover', dragover);
  placeholder.addEventListener('dragenter', dragenter);
  placeholder.addEventListener('dragleave', dragleave);
  placeholder.addEventListener('drop', drop);
}

function dragstart(evt) {
  evt.target.classList.add('hold');
  setTimeout(() => evt.target.classList.add('hiden'), 0)
}

function dragend(evt) {
  evt.target.classList.remove('hold');
  evt.target.classList.remove('hiden');
}

function dragover (evt) {
  evt.preventDefault()
}

function dragenter (evt) {
  evt.target.classList.add('hovered')
}

function dragleave (evt) {
  evt.target.classList.remove('hovered')
}

function drop (evt) {
  evt.target.classList.remove('hovered')
  evt.target.append(item)
}