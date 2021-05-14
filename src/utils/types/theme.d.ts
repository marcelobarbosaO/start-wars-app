declare interface Theme {
  title: string;
  colors: {
    [key: string]: string;
  };
  typography: {
    [key: string]: string;
  };
}
