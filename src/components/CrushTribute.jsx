import HTMLFlipBook from "react-pageflip";
import { useState, useRef } from "react";
import "./styles.css";

const pages = [
  {
    title: "9 Điều Về Đan Tâm",
    content:
      "Đây là cuốn sách nhỏ về những điều mình nghĩ về Đan Tâm. Hãy nhấn vào góc phải màn hình để lật sang trang tiếp theo nhé!",
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
    title: "Đan Tâm và những giấc mơ",
    content:
      "Dù là những ước mơ nhỏ bé hay những hoài bão lớn lao, Đan Tâm luôn cố gắng từng bước để đạt được chúng. Cô ấy không chỉ mơ ước mà còn nỗ lực biến nó thành hiện thực.",
    image: "image10.jpg",
    sound: "sound10.mp3",
  },
  {
    title: "Đan Tâm và những điều nhỏ bé",
    content:
      "Đan Tâm không chỉ trân trọng những điều lớn lao, mà còn tìm thấy hạnh phúc trong những điều giản dị. Một buổi hoàng hôn đẹp, một tách trà thơm, hay chỉ là một câu chuyện nhỏ với người cô ấy thương.",
    image: "image11.jpg",
    sound: "sound11.mp3",
  },
  {
    title: "Khi Đan Tâm tức giận",
    content:
      "Có một Đan Tâm nghiêm túc, mạnh mẽ và cũng có một Đan Tâm khi tức giận 😠. Nhưng ngay cả khi giận dữ, cô ấy vẫn rất đáng yêu theo cách riêng của mình.",
    image: "image12.jpg",
    sound: "sound12.mp3",
  },
  {
    title: "Đan Tâm và những lúc trầm lặng",
    content:
      "Dù có mạnh mẽ thế nào, cũng sẽ có những lúc Đan Tâm trầm lặng, suy tư về cuộc sống. Nhưng đó cũng chính là lúc cô ấy đẹp nhất – một vẻ đẹp sâu sắc, đầy cảm xúc",
    image: "image13.jpg",
    sound: "sound12.mp3",
  },
  {
    title: "Khi Đan Tâm động viên người khác",
    content:
      "Đan Tâm không phải kiểu người nói nhiều lời hoa mỹ, nhưng mỗi khi ai đó cần một động lực, cô ấy luôn có cách giúp họ cảm thấy mạnh mẽ hơn. Một lời nói, một ánh mắt, một hành động nhỏ cũng đủ khiến ai đó cảm thấy được tiếp thêm sức mạnh.",
    image: "image14.jpg",
    sound: "sound12.mp3",
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
      "Đan Tâm không cần thay đổi để trở thành ai khác. Đan Tâm như bây giờ đã là một điều tuyệt vời rồi. Trên thế giới này, có hàng tỷ người, nhưng chỉ có một Đan Tâm – một người không giống ai, một người không thể thay thế. Cảm ơn vì đã là chính mình.",
    image: "image8.jpg",
    sound: "sound8.mp3",
  },
  {
    title: "Trang cuối mình chỉ muốn chúc Đan Tâm",
    content:
      "Mong năm nay Đan Tâm sẽ ngày càng rạng rỡ, trẻ trung và luôn tràn đầy niềm vui. Chúc Đan Tâm mãi hạnh phúc, vững bước trên con đường mình chọn và đạt được mọi thành công mà trái tim mong muốn. Hãy luôn là cô gái mang trong mình hai thế giới: một Đan Tâm 17 tuổi hồn nhiên, tươi tắn như ánh ban mai, và một Đan Tâm trưởng thành, kiên định, mạnh mẽ trước mọi sóng gió. Luôn tiến về phía trước, vì thế giới này cần một Đan Tâm rực rỡ như thế. Mình từng nói rằng đây là '9 điều về Đan Tâm', nhưng thực ra... có lẽ 9 điều là quá ít để nói về một cô gái đặc biệt như Đan Tâm. Có những điều không thể viết thành lời, chỉ có thể cảm nhận bằng trái tim. Fighting, my little girl! 🌙✨",
    image: "image9.jpg",
    sound: "sound9.mp3",
  },
];

const PASSWORD = "29280906";

export default function CrushTribute() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [inputPassword, setInputPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const audioRef = useRef(null);

  // const handleFlip = (e) => {
  //   setCurrentPage(e.data);
  //   if (e.data === 1 && audioRef.current) {
  //     audioRef.current.play();
  //   }
  // };

  const handleUnlock = () => {
    if (inputPassword === PASSWORD) {
      setIsUnlocked(true);
      if (audioRef.current) {
        audioRef.current.play(); // Tự động phát nhạc khi mở khóa
      }
    } else {
      setErrorMessage(
        "Ồ, bạn đã nhập sai mật khẩu rồi! Bạn có thể tự đoán mò hoặc vào link này để chơi trò chơi và nhận mật khẩu: [Link trò chơi]"
      );
    }
  };

  return (
    <div className="book-container">
      <audio ref={audioRef} src="background-music.mp3" loop />
      {!isUnlocked ? (
        <div className="password-container">
          <h2 className="password-title">
            🔒 Nhập mật khẩu để mở khóa cuốn sách
          </h2>
          <input
            type="password"
            value={inputPassword}
            onChange={(e) => setInputPassword(e.target.value)}
            placeholder="Nhập mật khẩu..."
            className="password-input"
          />
          <button className="password-button" onClick={handleUnlock}>
            Mở khóa
          </button>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
      ) : (
        <HTMLFlipBook
          width={window.innerWidth < 768 ? 300 : 500}
          height={window.innerWidth < 768 ? 450 : 700}
          className="react-pageflip"
          // onFlip={handleFlip}
        >
          {pages.map((page, index) => (
            <div key={index} className="page">
              <div className="image-container">
                <img src={page.image} alt={page.title} className="page-image" />
              </div>
              <h1 className="title">{page.title}</h1>
              <p className="content">{page.content}</p>
            </div>
          ))}
        </HTMLFlipBook>
      )}
    </div>
  );
}
