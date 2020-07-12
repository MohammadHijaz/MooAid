import Scorpion from "../Images/Scorpion.jpg";
import Broken from "../Images/brokenQuestion.jpg";
import questionMark from "../Images/questionMark.jpg";
import bleedingHand from "../Images/bleedingHand.jpg";
import snake from "../Images/snake.jpg";
import sharpKnife from "../Images/sharpKnife.jpg";
const Questions = [
  {
    id: 1,
    firstQuestion: "*وقع صديقي على يده و شكَّ أنها كسرت .....ماذا أفعل",
    firstAnswer: "-آمره بتحريكها للتأكد من سلامتها",
    secondAnswer: "-أهلع و أبدأ بالصراخ ",
    thirdAnswer: "أحاول طمأنته و آمره بابقائها ثابتة",
    answer: 3,
    img: Broken,
  },
  {
    id: 2,
    firstQuestion: "*اذا حدث امرٌ طارئ لصديق",
    firstAnswer: "اتصرف كخبير و أبدأ بعلاجه",
    secondAnswer: "أبحث عن أقرب شخص بالغ للمساعدة ",
    thirdAnswer: "أتجاهل الموقف",
    answer: 2,
    img: questionMark,
  },
  {
    id: 3,
    firstQuestion: "عند اسعاف الجروح اول خطوه نقوم بها",
    firstAnswer: "نغسل يدينا ",
    secondAnswer: "نلف الجرح بضماده نظيفة",
    thirdAnswer: "نعقم الجرح",
    answer: 1,
    img: bleedingHand,
  },
  {
    id: 4,
    firstQuestion: "عند اسعاف شخص من عضه عقرب فاننا نحرص على ان تكون العضة",
    firstAnswer: "-اعلى من مستوى القلب",
    secondAnswer: "-ادنى من مستوى القلب",
    thirdAnswer: "هذا لا يهم بتاتا",
    answer: 2,
    img: Scorpion,
  },
  {
    id: 5,
    firstQuestion: "عند تعرض شخص ما للدغه افعى فاننا نحرص على",
    firstAnswer: "ان يتحرك المصاب قدر الامكان",
    secondAnswer: "ان نأخذ صورة للافعى",
    thirdAnswer: "ان نقوم بمص دماء الجرح بالفم",
    answer: 2,
    img: snake,
  },
  {
    id: 6,
    firstQuestion: "اذا غرزت اداة حادة غي جسم شخص كيف يجب ان اتصرف",
    firstAnswer: "اقوم بنزعها حالا",
    secondAnswer: "ابقيها كما هي و اتوجه للطبيب فورا",
    thirdAnswer: "لا شيء مما سبق",
    answer: 2,
    img: sharpKnife,
  },
];
export default Questions;
