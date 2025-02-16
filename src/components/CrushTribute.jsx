import HTMLFlipBook from "react-pageflip";
import { useState, useRef } from "react";
import "./styles.css";

const pages = [
  {
    title: "9 Điều Dành Cho Chị Đan Tâm",
    content: "",
    image: "cover.webp",
    sound: "cover.mp3",
    isCover: true,
  },
  {
    title: "Có một người...",
    content:
      "Có một người mà mình luôn ngưỡng mộ, không chỉ vì những gì chị làm được, mà còn vì con người của chị.",
    image: "image1.jpg",
    sound: "sound1.mp3",
  },
  {
    title: "Gia đình - Nơi yêu thương bắt đầu",
    content:
      "Chị luôn xem gia đình là điều quan trọng nhất. Dù có đi xa đến đâu, có bận rộn thế nào, trái tim chị vẫn luôn hướng về gia đình. Họ không chỉ là chốn bình yên, mà còn là động lực lớn nhất của chị.",
    image: "image3.jpg",
    sound: "sound3.mp3",
  },
  {
    title: "Người chị mạnh mẽ",
    content:
      "Có những người mạnh mẽ vì họ muốn thế, nhưng cũng có những người mạnh mẽ vì họ phải thế. Dù là gì, chị vẫn tỏa sáng theo cách riêng của mình.",
    image: "image2.jpg",
    sound: "sound2.mp3",
  },
  {
    title: "Sự ấm áp của chị",
    content:
      "Một ánh mắt, một nụ cười, một lời động viên từ chị cũng có thể khiến người ta cảm thấy thế giới này dịu dàng hơn.",
    image: "image4.jpg",
    sound: "sound4.mp3",
  },
  {
    title: "Có bao giờ chị tự hỏi...",
    content:
      "Rằng thế giới này may mắn thế nào khi có chị? Những điều chị làm, dù nhỏ bé hay lớn lao, đều để lại dấu ấn trong lòng ai đó.",
    image: "image5.jpg",
    sound: "sound5.mp3",
  },
  {
    title: "Chị cũng cần được yêu thương",
    content:
      "Mạnh mẽ không có nghĩa là phải đi một mình. Ai cũng xứng đáng có một chốn dựa vào, kể cả chị.",
    image: "image6.jpg",
    sound: "sound6.mp3",
  },
  {
    title: "Một khoảnh khắc yên bình",
    content:
      "Nếu có một ngày chị thấy mệt, hãy cho phép bản thân dừng lại một chút. Mình mong chị luôn tìm thấy sự bình yên trong tim mình.",
    image: "image7.jpg",
    sound: "sound7.mp3",
  },
  {
    title: "Cảm ơn vì đã là chính mình",
    content:
      "Chị không cần thay đổi để trở thành ai khác. Chị như bây giờ đã là một điều tuyệt vời rồi.",
    image: "image8.jpg",
    sound: "sound8.mp3",
  },
  {
    title: "Trang cuối em chỉ muốn chúc chịi",
    content:
      "Mong năm nay chị Đan Tâm sẽ ngày càng trẻ đẹp, trẻ mãi không già, luôn vui vẻ, hạnh phúc và thành công trong công việc nhé. Chúc chị năm nay thật ý nghĩa và đáng nhớ",
    image: "image9.jpg",
    sound: "sound9.mp3",
  },
];

export default function CrushTribute() {
  const [currentPage, setCurrentPage] = useState(0);
  const audioRef = useRef(null);

  const handleFlip = (e) => {
    setCurrentPage(e.data);
    if (e.data === 1 && audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <div className="book-container">
      <audio ref={audioRef} src="background-music.mp3" loop />
      <HTMLFlipBook
        width={500}
        height={700}
        className="react-pageflip"
        onFlip={handleFlip}
      >
        {pages.map((page, index) => (
          <div key={index} className="page">
            <div className="image-container">
              <img src={page.image} alt={page.title} className="page-image" />
            </div>
            {page.isCover ? (
              <h1 className="title">{page.title}</h1>
            ) : (
              <>
                <h1 className="title">{page.title}</h1>
                <p className="content">{page.content}</p>
              </>
            )}
          </div>
        ))}
      </HTMLFlipBook>
    </div>
  );
}
