import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#6366f1", // Indigo
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#a855f7", // Purple
    },
    background: {
      default: "#050507",
      paper: "rgba(255, 255, 255, 0.05)",
    },
    text: {
      primary: "#ffffff",
      secondary: "#a1a1aa",
    },
  },
  typography: {
    fontFamily: "'Outfit', sans-serif",
    h1: { fontWeight: 800 },
    h2: { fontWeight: 700 },
    h3: { fontWeight: 700 },
    h4: { fontWeight: 600 },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600 },
    button: { fontWeight: 600, textTransform: "none" },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: "rgba(5, 5, 7, 0.7)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
          boxShadow: "none",
          backgroundImage: "none", // Remove default gradient
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: "rgba(255, 255, 255, 0.03)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255, 255, 255, 0.08)",
          transition: "transform 0.2s ease-in-out, border 0.2s ease-in-out",
          "&:hover": {
            transform: "translateY(-4px)",
            border: "1px solid rgba(99, 102, 241, 0.3)",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 50,
          padding: "10px 24px",
        },
        contained: {
          background: "linear-gradient(135deg, #6366f1 0%, #a855f7 100%)",
          boxShadow: "0 4px 14px 0 rgba(99, 102, 241, 0.3)",
          "&:hover": {
            boxShadow: "0 6px 20px 0 rgba(99, 102, 241, 0.4)",
          },
        },
        outlined: {
          borderColor: "rgba(255,255,255,0.2)",
          "&:hover": {
            borderColor: "#ffffff",
            background: "rgba(255,255,255,0.05)",
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
        },
        head: {
          fontWeight: 700,
          color: "#a1a1aa",
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          background: "#1a1a2e",
          border: "1px solid rgba(255, 255, 255, 0.1)",
        },
      },
    },
    MuiPopover: {
      styleOverrides: {
        paper: {
          background: "#1a1a2e",
        },
      },
    },
  },
});

export default theme;
