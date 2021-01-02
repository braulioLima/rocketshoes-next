interface Theme {
  colors: {
    background: string;
    text: string;
    primary: string;
  };
  fontSize: {
    tiny: string;
    small: string;
    normal: string;
    large: string;
    xLarge: string;
    xXLarge: string;
  };
}

const darkTheme: Theme = {
  colors: {
    background: '#191920',
    text: '#ffffff',
    primary: '#7159c1',
  },
  fontSize: {
    tiny: '0.8rem',
    small: '1.2rem',
    normal: '1.6rem',
    large: '1.8rem',
    xLarge: '2.1rem',
    xXLarge: '3rem',
  },
};

export default darkTheme;
