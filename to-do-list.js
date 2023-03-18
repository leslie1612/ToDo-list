function add() {
  let work = document.querySelector("#work");
  let work_value = work.value;
  let list = document.querySelector("#list");
  let time = document.querySelector("#time");
  let add_li = document.createElement("li");
  let add_span = document.createElement("span");
  let btn_del = document.createElement("button");
  let btn_done = document.createElement("button");
  let finish = document.createElement("div");

  if (work_value !== "") {
    if (time.value !== "none") {
      add_span.textContent = work_value;
      add_span.className = add_span.className + time.value;
      btn_del.textContent = "X";
      btn_del.className = "del";
      btn_done.textContent = "V";
      btn_done.className = "done";
      finish.textContent = "(已完成)";
      list.append(add_li);
      add_li.append(add_span);
      add_li.append(finish);
      add_li.append(btn_done);
      add_li.append(btn_del);

      work.value = "";
      time.value = "none";
      btn_del.onclick = deleteli;
      work.className = "input";
      btn_done.onclick = done_btn;
      finish.style.display = "none";
    } else {
      alert("請選擇事件分類");
    }
  } else {
    alert("請輸入代辦事項");
  }
}

// 按"刪除"後 刪除待辦事項
function deleteli() {
  event.target.closest("li").remove();
}

// 完成按鈕效果
function done_btn() {
  let done_btn = event.target.closest("button");
  let done_box = event.target.closest("li");
  let done_text = done_box.querySelector("span");
  if (done_btn.className == "done") {
    done_btn.className = "OK";
    done_box.className = "fade";
    done_text.style.textDecoration = "line-through rgb(70, 70, 70)";
  } else {
    done_btn.className = "done";
    done_box.className = "";
    done_text.style.textDecoration = "none";
  }
}

// 按匯出文字後儲存檔案
// function saveTextAsFile(_fileName, _text) {
//   let words = document.querySelectorAll("#list span");
//   let num = 1;
//   let text = "";
//   for (let word of words) {
//     if (word.className == "important") {
//       text = text + num.toString() + "." + "*" + word.textContent + "*" + "\n";
//     } else if (word.className == "urgent") {
//       text =
//         text + num.toString() + "." + "**" + word.textContent + "**" + "\n";
//     } else {
//       text = text + num.toString() + "." + word.textContent + "\n"; // x=line陣列內的所有元素 ; x.children[0] = <li>內的第一個子元素 = <span>
//     }
//     num = num + 1;
//   }
//   var textFileAsBlob = new Blob([text], { type: "text/plain" });

//   var downloadLink = document.createElement("a");
//   downloadLink.download = "我的代辦事項";
//   downloadLink.innerHTML = "Download File";
//   if (window.webkitURL != null) {
//     // Chrome allows the link to be clicked
//     // without actually adding it to the DOM.
//     downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
//   } else {
//     // Firefox requires the link to be added to the DOM
//     // before it can be clicked.
//     downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
//     downloadLink.onclick = destroyClickedElement;
//     downloadLink.style.display = "none";
//     document.body.appendChild(downloadLink);
//   }
//   downloadLink.click();
// }
// function destroyClickedElement(event) {
//   document.body.removeChild(event.target);
// }
//
// 選擇事件分類時更改輸入框顏色
// function change() {
//   let work = document.querySelector("#work");
//   let target = event.target.options[event.target.selectedIndex].value;
//   if (target == "important") {
//     work.className = "important-input";
//   } else if (target == "urgent") {
//     work.className = "urgent-input";
//   } else {
//     work.className = "input";
//   }
// }

// 重新填寫
function restart() {
  if (confirm("確定要刪除嗎？") == true) {
    work.value = "";
    time.value = "none";
    let all = document.querySelectorAll("li");
    for (i = 0; i < all.length; i++) {
      all[i].remove();
    }
  }
}
