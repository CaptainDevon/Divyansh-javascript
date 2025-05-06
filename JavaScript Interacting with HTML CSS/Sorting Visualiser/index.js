const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

let arr = [
    17, 3, 45, 9, 25, 36, 2, 33, 50, 1,
    22, 39, 19, 46, 5, 8, 10, 34, 28, 13,
    7, 12, 20, 4, 24, 6, 18, 11, 21, 38,
    30, 31, 16, 29, 23, 26, 48, 43, 27, 47,
    14, 40, 15, 49, 41, 35, 42, 32, 44, 37
  ];

const barCreator=()=>{
    for(let i=0;i<arr.length-1;i++)
    {
        let bar=document.createElement("div");

        bar.classList.add("bar");
        bar.style.height=(arr[i]*3)+"px";
        document.getElementById("box").appendChild(bar);
    }
};

const bubbleSort = async () => {
    let bars = document.querySelectorAll(".bar");
  
    for (let i = 0; i < bars.length - 1; i++) {
      for (let j = 0; j < bars.length - i - 1; j++) {
  
        
        bars[j].style.backgroundColor = "red";
        bars[j + 1].style.backgroundColor = "red";
  
        
        await sleep(10);
  
        
        let height1 = parseInt(bars[j].style.height);
        let height2 = parseInt(bars[j + 1].style.height);
  
        if (height1 > height2) {
          
          bars[j].style.height = height2 + "px";
          bars[j + 1].style.height = height1 + "px";
        }
  
        
        bars[j].style.backgroundColor = "steelblue";
        bars[j + 1].style.backgroundColor = "steelblue";
      }
  
      
      bars[bars.length - i - 1].style.backgroundColor = "green";
    }
  
    bars[0].style.backgroundColor = "green";
};

const insertionSort = async () => {
    let bars = document.querySelectorAll(".bar");
    for (let i = 1; i < bars.length; i++) {
        let keyHeight = parseInt(bars[i].style.height);
        let j = i - 1;

        bars[i].style.backgroundColor = "red";
        await sleep(50);

        while (j >= 0 && parseInt(bars[j].style.height) > keyHeight) {
            bars[j + 1].style.height = bars[j].style.height;
            bars[j].style.backgroundColor = "red";
            await sleep(50);
            bars[j].style.backgroundColor = "steelblue";
            j--;
        }

        bars[j + 1].style.height = keyHeight + "px";
        bars[i].style.backgroundColor = "steelblue";
    }

    for (let i = 0; i < bars.length; i++) {
        bars[i].style.backgroundColor = "green";
        await sleep(10);
    }
};

const selectionSort = async () => {
    let bars = document.querySelectorAll(".bar");
    let n = bars.length;

    for (let i = 0; i < n; i++) {
        let minIndex = i;
        bars[minIndex].style.backgroundColor = "red";
        for (let j = i + 1; j < n; j++) {
            bars[j].style.backgroundColor = "yellow";
            await sleep(10);

            if (parseInt(bars[j].style.height) < parseInt(bars[minIndex].style.height)) {
                bars[minIndex].style.backgroundColor = "steelblue";
                minIndex = j;
                bars[minIndex].style.backgroundColor = "red";
            } else {
                bars[j].style.backgroundColor = "steelblue";
            }
        }

        let temp = bars[i].style.height;
        bars[i].style.height = bars[minIndex].style.height;
        bars[minIndex].style.height = temp;

        bars[minIndex].style.backgroundColor = "steelblue";
        bars[i].style.backgroundColor = "green";
    }
};

const mergeSort = async () => {
    let bars = document.querySelectorAll(".bar");
    let heights = Array.from(bars).map(bar => parseInt(bar.style.height));
    await mergeSortHelper(heights, 0, heights.length - 1, bars);
    for (let bar of bars) {
        bar.style.backgroundColor = "green";
        await sleep(10);
    }
};

const mergeSortHelper = async (arr, left, right, bars) => {
    if (left >= right) return;
    let mid = Math.floor((left + right) / 2);
    await mergeSortHelper(arr, left, mid, bars);
    await mergeSortHelper(arr, mid + 1, right, bars);
    await merge(arr, left, mid, right, bars);
};

const merge = async (arr, left, mid, right, bars) => {
    let n1 = mid - left + 1;
    let n2 = right - mid;
    let L = [], R = [];

    for (let i = 0; i < n1; i++) L.push(arr[left + i]);
    for (let j = 0; j < n2; j++) R.push(arr[mid + 1 + j]);

    let i = 0, j = 0, k = left;

    while (i < n1 && j < n2) {
        bars[k].style.backgroundColor = "red";
        await sleep(50);
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            bars[k].style.height = L[i] + "px";
            i++;
        } else {
            arr[k] = R[j];
            bars[k].style.height = R[j] + "px";
            j++;
        }
        bars[k].style.backgroundColor = "steelblue";
        k++;
    }

    while (i < n1) {
        bars[k].style.backgroundColor = "red";
        await sleep(50);
        arr[k] = L[i];
        bars[k].style.height = L[i] + "px";
        bars[k].style.backgroundColor = "steelblue";
        i++; k++;
    }

    while (j < n2) {
        bars[k].style.backgroundColor = "red";
        await sleep(10);
        arr[k] = R[j];
        bars[k].style.height = R[j] + "px";
        bars[k].style.backgroundColor = "steelblue";
        j++; k++;
    }
};


