import tkinter as tk
import tkinter.font as tkFont

class App:
    def __init__(self, root):
        #setting title
        root.title("undefined")
        #setting window size
        width=333
        height=381
        screenwidth = root.winfo_screenwidth()
        screenheight = root.winfo_screenheight()
        alignstr = '%dx%d+%d+%d' % (width, height, (screenwidth - width) / 2, (screenheight - height) / 2)
        root.geometry(alignstr)
        root.resizable(width=False, height=False)

        GButton_440=tk.Button(root)
        GButton_440["bg"] = "#f0f0f0"
        ft = tkFont.Font(family='Times',size=10)
        GButton_440["font"] = ft
        GButton_440["fg"] = "#000000"
        GButton_440["justify"] = "center"
        GButton_440["text"] = "Button"
        GButton_440.place(x=130,y=270,width=70,height=25)
        GButton_440["command"] = self.GButton_440_command

        GButton_303=tk.Button(root)
        GButton_303["bg"] = "#080808"
        ft = tkFont.Font(family='Times',size=10)
        GButton_303["font"] = ft
        GButton_303["fg"] = "#000000"
        GButton_303["justify"] = "center"
        GButton_303["text"] = ""
        GButton_303.place(x=0,y=0,width=331,height=384)
        GButton_303["command"] = self.GButton_303_command

        GButton_647=tk.Button(root)
        GButton_647["bg"] = "#92ff03"
        GButton_647["disabledforeground"] = "#bababa"
        ft = tkFont.Font(family='Times',size=16)
        GButton_647["font"] = ft
        GButton_647["fg"] = "#ffffff"
        GButton_647["justify"] = "center"
        GButton_647["text"] = "esse eh o teste do tutas infelizmente n"
        GButton_647.place(x=60,y=70,width=210,height=64)
        GButton_647["command"] = self.GButton_647_command

        GButton_807=tk.Button(root)
        GButton_807["bg"] = "#393d49"
        ft = tkFont.Font(family='Times',size=10)
        GButton_807["font"] = ft
        GButton_807["fg"] = "#ffffff"
        GButton_807["justify"] = "center"
        GButton_807["text"] = "Button"
        GButton_807.place(x=60,y=150,width=207,height=60)
        GButton_807["command"] = self.GButton_807_command

        GButton_559=tk.Button(root)
        GButton_559["bg"] = "#393d49"
        ft = tkFont.Font(family='Times',size=10)
        GButton_559["font"] = ft
        GButton_559["fg"] = "#ffffff"
        GButton_559["justify"] = "center"
        GButton_559["text"] = "Button"
        GButton_559.place(x=120,y=220,width=70,height=25)
        GButton_559["command"] = self.GButton_559_command

    def GButton_440_command(self):
        print("command")


    def GButton_303_command(self):
        print("command")


    def GButton_647_command(self):
        print("command")


    def GButton_807_command(self):
        print("command")


    def GButton_559_command(self):
        print("command")

if __name__ == "__main__":
    root = tk.Tk()
    app = App(root)
    root.mainloop()
