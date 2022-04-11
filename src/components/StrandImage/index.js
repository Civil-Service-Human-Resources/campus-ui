import img1 from '../../assets/images/strand-1.png';
import img2 from '../../assets/images/strand-2.png';
import img3 from '../../assets/images/strand-3.png';
import img4 from '../../assets/images/strand-4.png';
import img5 from '../../assets/images/strand-5.png';

const images = {
  strand1: img1,
  strand2: img2,
  strand3: img3,
  strand4: img4,
  strand5: img5,
};

export const StrandImage = ({ imageName }) => {
  return (
    <div className="campus-strand-image">
      <img alt="" src={images[imageName]} />
    </div>
  );
};
