"use client";

const TypographySection = () => {
  const sectionStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'bottom',
    padding: '20px',
    backgroundColor: '#f0f0f0',
  };

  const leftStyle = {
    display: 'flex',
    alignItems: 'flex-end',
  };

  const middleStyle = {
    display: 'flex',
    alignItems: 'bottom',
  };

  const rightStyle = {
    display: 'flex',
    alignItems: 'flex-end',
  };

  const badgeStyle = {
    padding: '5px 10px',
    border: '1px solid black',
    borderRadius: '5px',
    marginLeft: '10px',
  };

  const priceStyle = {
    textDecoration: 'line-through',
    color: 'gray',
    marginRight: '10px',
  };

  return (
    <div>
      <div style={sectionStyle}>
        <div style={leftStyle}>
          <span>2024 / 6+ / 01 Season / 03h 45m</span>
        </div>
          <div style={middleStyle}  className=" flex flex-row flex-col">
            <div style={middleStyle} className="items-end flex-grow flex ">
            <span style={badgeStyle}>Preorder</span>
            <span style={badgeStyle} >New</span>
          </div>
          <div style={middleStyle}>
            <h1 >Typography Principles</h1>
          </div>
          
        </div>

        <div style={rightStyle}>
        <span style={priceStyle}>$150</span>
        <span className="flex items-center h2 mb-0">$75 / Preorder</span>
        </div>
    </div>
      <img src="https://deso-strapi-cms.onrender.com/uploads/1_season_1_widescreen_v3_d40331483a.jpg" alt="img 2" />
    </div>
    

    
  );
};

export default TypographySection;
