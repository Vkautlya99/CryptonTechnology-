interface Course {
  iconClass: string;
  name: string;
  lessons: number;
  startDate: string;
  completedLessons: number;
  duration: string;
}

const courses: Course[] = [
  {
    iconClass: "basic-algorithm",
    name: "Basic Algorithm",
    lessons: 25,
    startDate: "27 Jan, 2023",
    completedLessons: 10,
    duration: "14h 38m 56s",
  },
  {
    iconClass: "web-development",
    name: "Web Development",
    lessons: 45,
    startDate: "23 Feb, 2023",
    completedLessons: 40,
    duration: "36h 30m 00s",
  },
  {
    iconClass: "data-science",
    name: "Basic Data Science",
    lessons: 37,
    startDate: "14 Jan, 2023",
    completedLessons: 9,
    duration: "37h 00m 00s",
  },
  {
    iconClass: "ui-ux",
    name: "UI/UX Design",
    lessons: 32,
    startDate: "19 Feb, 2023",
    completedLessons: 26,
    duration: "16h 40m 50s",
  },
  {
    iconClass: "project-management",
    name: "Project Management",
    lessons: 19,
    startDate: "27 Jan, 2023",
    completedLessons: 14,
    duration: "13h 20m 00s",
  },
];

function populateCourses() {
  const courseList = document.getElementById(
    "course-list"
  ) as HTMLTableSectionElement;
  courses.forEach((course) => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
            <td class="course-name">
                <div class="course-icon ${course.iconClass}"></div>
                <div>
                    <span>${course.name}</span>
                    <span class="lessons">${course.lessons} Lessons</span>
                </div>
            </td>
            <td>${course.startDate}</td>
            <td>${course.completedLessons}/${course.lessons} (${Math.round(
      (course.completedLessons / course.lessons) * 100
    )}%)</td>
            <td>${course.duration}</td>
        `;

    courseList.appendChild(tr);
  });
}

document.addEventListener("DOMContentLoaded", populateCourses);
