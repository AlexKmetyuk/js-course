function makeTask(data) {
  const completed = false;
  const category = "General";
  const priority = "Normal";
  // Change code below this line

  const { text } = data;
  const newCategory = data.category ? data.category : category;
  const newPriority = data.priority ? data.priority : priority;

  const newData = {
    completed,
    category,
    priority,
    ...data,
  };

  return {
    completed,
    category,
    priority,
    ...data,
  };
  // Change code above this line
}
