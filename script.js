console.log('JavaScript is working!');

function generateRandomArray(size = 20) {
    const array = [];
    for (let i = 0; i < size; i++) {
        array.push(Math.floor(Math.random() * 100) + 1);
    }
    return array;
}

function renderArray(array) {
    const container = document.getElementById('container');
    container.innerHTML = ''; // Clear the container

    array.forEach((value) => {
        const bar = document.createElement('div');
        bar.classList.add('bar');
        bar.style.height = `${value * 3}px`;
        container.appendChild(bar);
    });
}
function setDescription(text) {
    document.getElementById('description').innerText = text;
}

// Quick Sort
async function quickSort() {
    setDescription('Quick Sort: A divide-and-conquer algorithm that selects a pivot element and partitions the array around the pivot.');
    const array = generateRandomArray();
    renderArray(array);
    await quickSortHelper(array, 0, array.length - 1);
    renderArray(array);
}

async function quickSortHelper(array, low, high) {
    if (low < high) {
        const pivotIndex = await partition(array, low, high);
        await quickSortHelper(array, low, pivotIndex - 1);
        await quickSortHelper(array, pivotIndex + 1, high);
    }
}

async function partition(array, low, high) {
    const pivot = array[high];
    let i = low - 1;

    for (let j = low; j < high; j++) {
        if (array[j] < pivot) {
            i++;
            [array[i], array[j]] = [array[j], array[i]];
            renderArray(array);
            await new Promise((resolve) => setTimeout(resolve, 100)); // Slow down for visualization
        }
    }
    [array[i + 1], array[high]] = [array[high], array[i + 1]];
    renderArray(array);
    await new Promise((resolve) => setTimeout(resolve, 100)); // Slow down for visualization
    return i + 1;
}

// Merge Sort
async function mergeSort() {
    setDescription('Merge Sort: A divide-and-conquer algorithm that divides the array into halves, recursively sorts them, and then merges them back together.');
    const array = generateRandomArray();
    renderArray(array);
    await mergeSortHelper(array, 0, array.length - 1);
    renderArray(array);
}

async function mergeSortHelper(array, left, right) {
    if (left < right) {
        const mid = Math.floor((left + right) / 2);
        await mergeSortHelper(array, left, mid);
        await mergeSortHelper(array, mid + 1, right);
        await merge(array, left, mid, right);
    }
}

async function merge(array, left, mid, right) {
    const leftArray = array.slice(left, mid + 1);
    const rightArray = array.slice(mid + 1, right + 1);
    let i = 0, j = 0, k = left;

    while (i < leftArray.length && j < rightArray.length) {
        if (leftArray[i] <= rightArray[j]) {
            array[k++] = leftArray[i++];
        } else {
            array[k++] = rightArray[j++];
        }
        renderArray(array);
        await new Promise((resolve) => setTimeout(resolve, 100)); // Slow down for visualization
    }

    while (i < leftArray.length) {
        array[k++] = leftArray[i++];
        renderArray(array);
        await new Promise((resolve) => setTimeout(resolve, 100)); // Slow down for visualization
    }

    while (j < rightArray.length) {
        array[k++] = rightArray[j++];
        renderArray(array);
        await new Promise((resolve) => setTimeout(resolve, 100)); // Slow down for visualization
    }
}
// Insertion Sort
async function insertionSort() {
    setDescription('Insertion Sort: A simple sorting algorithm that builds the final sorted array one item at a time by comparing and inserting elements into their correct position.');
    const array = generateRandomArray();
    renderArray(array);

    for (let i = 1; i < array.length; i++) {
        let key = array[i];
        let j = i - 1;

        while (j >= 0 && array[j] > key) {
            array[j + 1] = array[j];
            j = j - 1;
            renderArray(array);
            await new Promise((resolve) => setTimeout(resolve, 100)); // Slow down for visualization
        }
        array[j + 1] = key;
        renderArray(array);
        await new Promise((resolve) => setTimeout(resolve, 100)); // Slow down for visualization
    }
}

async function bubbleSort() {
    setDescription('Bubble Sort: A simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order.');
    const array = generateRandomArray();
    renderArray(array);

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
                renderArray(array);
                await new Promise((resolve) => setTimeout(resolve, 100)); // Slow down for visualization
            }
        }
    }
}
