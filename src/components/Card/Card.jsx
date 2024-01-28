import './Card.css';

const IMAGE_PLACEMENT = ['top-full', 'left', 'right', 'bottom-full'];

export const Card = ({
  title,
  image,
  children,
  imagePosition = 'top-full',
  width,
  height,
  imgHeight
}) => {
  const position = IMAGE_PLACEMENT.includes(imagePosition) ? imagePosition : '';
  const classes = `LL-Card ${position}`;

  console.log(image);
  return (
    <article className={classes} style={{ width: width ?? 'auto' }}>
      <section className={`LL-CardImage ${position}`}>
   
        <img
          src={image
            || 'https://via.placeholder.com/300x200?text=Card+Image'
          }
          alt={title}
          title={`${title} | Little Lemon`}
          
          style={{height: imgHeight}}
        />
       
      </section>
    
      <div className="LL-CardBody">{children}</div>
    </article>
  );
};
