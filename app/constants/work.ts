import * as THREE from "three";
import { WorkTimelinePoint } from "../types";

export const WORK_TIMELINE: WorkTimelinePoint[] = [
  {
    point: new THREE.Vector3(0, 0, 0),
    year: '2024',
    title: 'UC Irvine',
    subtitle: 'CS + Architecture & Embedded Systems',
    position: 'right',
  },
  {
    point: new THREE.Vector3(-4, -4, -3),
    year: '2025',
    title: 'TENKI',
    subtitle: 'Software Engineer Intern',
    position: 'left',
  },
  {
    point: new THREE.Vector3(-3, -1, -6),
    year: '2025',
    title: "M's Dental",
    subtitle: 'Software Developer Intern',
    position: 'left',
  },
  {
    point: new THREE.Vector3(0, -1, -10),
    year: '2025',
    title: 'UCI Health',
    subtitle: 'Digital Communications Assistant',
    position: 'left',
  },
  {
    point: new THREE.Vector3(1, 1, -12),
    year: '2026',
    title: 'Bosch',
    subtitle: 'System Engineering Intern',
    position: 'right',
  }
]
