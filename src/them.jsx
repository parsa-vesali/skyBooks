import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Dana, Arial, sans-serif',
  },
  direction: 'rtl', // افزودن برای راست به چپ
  components: {
    MuiAccordion: {
      styleOverrides: {
        root: {
          boxShadow: 'none', // حذف سایه
          borderBottom: '1px solid rgba(0, 0, 0, 0.12)', // خط مرزی پایین
          '&:before': {
            display: 'none', // حذف خط بالای آکاردئون
          },
          '&:last-child': {
            borderBottom: '1px solid rgba(0, 0, 0, 0.12)', // خط مرزی پایین برای آخرین آکاردئون
          },
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          minHeight: 'auto', // تنظیم ارتفاع آکاردئون
          '&.Mui-expanded': {
            minHeight: 'auto', // تنظیم ارتفاع آکاردئون هنگام باز شدن
          },
        },
        content: {
          margin: 0, // حذف فاصله بین محتوای آکاردئون
          '&.Mui-expanded': {
            margin: 0, // حذف فاصله بین محتوای آکاردئون هنگام باز شدن
          },
        },
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          padding: '8px 16px', // تنظیم فضای داخلی جزئیات آکاردئون
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        '@global': {
          body: {
            fontFamily: 'Dana, Arial, sans-serif',
          },
        },
      },
    },
  },
});

export default theme;
