import HTMLFlipBook from "react-pageflip";
import { useState, useRef } from "react";
import "./styles.css";

const pages = [
  {
    title: "9 Điều Dành Cho Đan Tâm",
    content: "",
    image: "cover.webp",
    sound: "cover.mp3",
    isCover: true,
  },
  {
    title: "Có một người...",
    content:
      "Có một người mà mình luôn ngưỡng mộ, không chỉ vì những gì Đan Tâm làm được, mà còn vì con người của cô ấy.",
    image: "image1.jpg",
    sound: "sound1.mp3",
  },
  {
    title: "Gia đình - Nơi yêu thương bắt đầu",
    content:
      "Đan Tâm luôn xem gia đình là điều quan trọng nhất. Dù có đi xa đến đâu, có bận rộn thế nào, trái tim cô ấy vẫn luôn hướng về gia đình. Họ không chỉ là chốn bình yên, mà còn là động lực lớn nhất của cô ấy.",
    image: "image3.jpg",
    sound: "sound3.mp3",
  },
  {
    title: "Một người mạnh mẽ",
    content:
      "Có những người mạnh mẽ vì họ muốn thế, nhưng cũng có những người mạnh mẽ vì họ phải thế. Dù là gì, Đan Tâm vẫn tỏa sáng theo cách riêng của mình.",
    image: "image2.jpg",
    sound: "sound2.mp3",
  },
  {
    title: "Sự ấm áp của Đan Tâm",
    content:
      "Một ánh mắt, một nụ cười, một lời động viên từ Đan Tâm cũng có thể khiến người ta cảm thấy thế giới này dịu dàng hơn.",
    image: "image4.jpg",
    sound: "sound4.mp3",
  },
  {
    title: "Có bao giờ Đan Tâm tự hỏi...",
    content:
      "Rằng thế giới này may mắn thế nào khi có Đan Tâm? Những điều cô ấy làm, dù nhỏ bé hay lớn lao, đều để lại dấu ấn trong lòng ai đó.",
    image: "image5.jpg",
    sound: "sound5.mp3",
  },
  {
    title: "Đan Tâm cũng cần được yêu thương",
    content:
      "Mạnh mẽ không có nghĩa là phải đi một mình. Ai cũng xứng đáng có một chốn dựa vào, kể cả Đan Tâm.",
    image: "image6.jpg",
    sound: "sound6.mp3",
  },
  {
    title: "Một khoảnh khắc yên bình",
    content:
      "Nếu có một ngày Đan Tâm thấy mệt, hãy cho phép bản thân dừng lại một chút. Mình mong Đan Tâm luôn tìm thấy sự bình yên trong tim mình.",
    image: "image7.jpg",
    sound: "sound7.mp3",
  },
  {
    title: "Cảm ơn vì đã là chính mình",
    content:
      "Đan Tâm không cần thay đổi để trở thành ai khác. Đan Tâm như bây giờ đã là một điều tuyệt vời rồi.",
    image: "image8.jpg",
    sound: "sound8.mp3",
  },
  {
    title: "Trang cuối mình chỉ muốn chúc Đan Tâm",
    content:
      "Mong năm nay Đan Tâm sẽ ngày càng trẻ đẹp, trẻ mãi không già, luôn vui vẻ, hạnh phúc và thành công trong công việc nhé. Hãy mãi mãi vừa là người con gái 17 tuổi vừa là 1 người trưởng thành mạnh mẽ kiên định, luôn tiến về phía trước. Fightingg, litte girl",
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
        width={window.innerWidth < 768 ? 300 : 500}
        height={window.innerWidth < 768 ? 450 : 700}
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
