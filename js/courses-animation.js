const courses = document.querySelectorAll('.course');

courses.forEach(
    (course) => {
        course.addEventListener("click", () => {
            course.classList.toggle("a");
        });
    });