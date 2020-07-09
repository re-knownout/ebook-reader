import "normalize.css";
import "./root.less";
import BookParser from "./fragments/book-parser";

window.addEventListener("load", async () => {
	const dialog = document.createElement("input");
	dialog.type = "file";

	dialog.onchange = () => new BookParser().loadBookData(dialog.files).then(console.log);
	window.onclick = () => dialog.click();
});
