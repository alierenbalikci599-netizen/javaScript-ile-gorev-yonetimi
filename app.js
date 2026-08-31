const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const prioritySelect = document.getElementById('priority-select');
const taskList = document.getElementById('task-list');
const filterBtns = document.querySelectorAll('.filter-btn');
const clearCompletedBtn = document.getElementById('clear-completed-btn');

const countAll = document.getElementById('count-all');
const countPending = document.getElementById('count-pending');
const countCompleted = document.getElementById('count-completed');

let tasks = JSON.parse(localStorage.getItem('my_tasks')) || [];
let currentFilter = 'all';

document.addEventListener('DOMContentLoaded', renderTasks);

taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = taskInput.value.trim();
    if (!title) return;

    tasks.unshift({
        id: Date.now().toString(),
        title: title,
        priority: prioritySelect.value,
        completed: false
    });

    saveAndRender();
    taskInput.value = '';
});

function saveAndRender() {
    localStorage.setItem('my_tasks', JSON.stringify(tasks));
    renderTasks();
}

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = btn.dataset.filter;
        renderTasks();
    });
});

clearCompletedBtn.addEventListener('click', () => {
    tasks = tasks.filter(t => !t.completed);
    saveAndRender();
});

function renderTasks() {
    taskList.innerHTML = '';
    let filtered = tasks.filter(t => {
        if (currentFilter === 'pending') return !t.completed;
        if (currentFilter === 'completed') return t.completed;
        return true;
    });

    if (filtered.length === 0) {
        taskList.innerHTML = '<li style="text-align:center; color:#64748b; padding:15px;">Henüz görev bulunmuyor.</li>';
    } else {
        filtered.forEach(task => {
            const li = document.createElement('li');
            li.className = `task-item ${task.completed ? 'completed' : ''}`;
            li.innerHTML = `
                <div class="task-left">
                    <input type="checkbox" ${task.completed ? 'checked' : ''} onchange="toggleTask('${task.id}')">
                    <span class="task-text">${escapeHTML(task.title)}</span>
                    <span class="badge ${task.priority}">${task.priority}</span>
                </div>
                <button class="delete-btn" onclick="deleteTask('${task.id}')">&times;</button>
            `;
            taskList.appendChild(li);
        });
    }
    updateCounters();
}

window.toggleTask = (id) => {
    tasks = tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t);
    saveAndRender();
};

window.deleteTask = (id) => {
    tasks = tasks.filter(t => t.id !== id);
    saveAndRender();
};

function updateCounters() {
    const total = tasks.length;
    const completed = tasks.filter(t => t.completed).length;
    countAll.textContent = total;
    countPending.textContent = total - completed;
    countCompleted.textContent = completed;
}

function escapeHTML(str) {
    return str.replace(/[&<>'"]/g, tag => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;'
    }[tag] || tag));
}
