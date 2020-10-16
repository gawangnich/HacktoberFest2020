package Resources.Java;
import java.awt.*;
import java.awt.event.*;

public class dataEntryForm {
    public static void main(String[] args) {
    Frame frm=new Frame("DataEntry frame");
    Label lbl = new Label("Please fill this blank:");
    frm.add(lbl);
    frm.setSize(350,200);
    frm.setVisible(true);
    frm.addWindowListener(new WindowAdapter(){
    public void windowClosing(WindowEvent e){
    System.exit(0);
    }
    });
    Panel p = new Panel();
    Panel p1 = new Panel();
    Label jFirstName = new Label("First Name");     // enter first name here
    TextField lFirstName = new TextField(20);
    Label jLastName =new Label("Last Name");        // enter last name here
    TextField lLastName=new TextField(20);
    p.setLayout(new GridLayout(3,1));
    p.add(jFirstName);
    p.add(lFirstName);
    p.add(jLastName);
    p.add(lLastName);
    Button Submit=new Button("Submit");             // this button submits the entered data
    p.add(Submit);
    p1.add(p);
    frm.add(p1,BorderLayout.NORTH);
    }
}
