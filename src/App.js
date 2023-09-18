import axios from "axios";
import { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import {
  Alert,
  AppBar,
  Box,
  Breadcrumbs,
  Button,
  ButtonGroup,
  Divider,
  Drawer,
  LinearProgress,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Snackbar,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import FolderIcon from "@mui/icons-material/Folder";
import VideoFileIcon from "@mui/icons-material/VideoFile";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import IconButton from "@mui/material/IconButton";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SharedLayout from "./pages/SharedLayout";
import Dashboard from "./pages/Dashboard";
import FileManagement from "./pages/FileManagement";
import DimensionsAnalyst from "./pages/DimensionsAnalyst";
import Extraction from "./pages/Extraction";
// import ExtractionQA from "./pages/ExtractionQA";
import Demo from "./pages/Demo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="/file-management" element={<FileManagement />} />
          <Route path="/dimensions-analyst" element={<DimensionsAnalyst />} />
          {/* extraction compoent nasir ali  */}
          <Route path="/extraction" element={<Extraction />} />
          {/* <Route path="extractionaqa" element={<ExtractionQA />} /> */}
          {/* <Route path="/demo" element={<Demo />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// e79c2c
// 000000
