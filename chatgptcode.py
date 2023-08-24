import tkinter as tk
from tkinter import messagebox

class ToDoApp:
    def __init__(self, root):
        self.root = root
        self.root.title("To-Do List App")
        
        self.tasks = []
        
        self.task_entry = tk.Entry(root, width=40)
        self.task_entry.pack(pady=10)
        
        add_button = tk.Button(root, text="Add Task", command=self.add_task)
        add_button.pack()
        
        self.task_listbox = tk.Listbox(root, width=40)
        self.task_listbox.pack(pady=10)
        
        remove_button = tk.Button(root, text="Remove Task", command=self.remove_task)
        remove_button.pack()
        
    def add_task(self):
        task = self.task_entry.get()
        if task:
            self.tasks.append(task)
            self.update_task_listbox()
            self.task_entry.delete(0, tk.END)
            
    def remove_task(self):
        selected_index = self.task_listbox.curselection()
        if selected_index:
            index = selected_index[0]
            self.tasks.pop(index)
            self.update_task_listbox()
        
    def update_task_listbox(self):
        self.task_listbox.delete(0, tk.END)
        for task in self.tasks:
            self.task_listbox.insert(tk.END, task)
            
if __name__ == "__main__":
    root = tk.Tk()
    app = ToDoApp(root)
    root.mainloop()
