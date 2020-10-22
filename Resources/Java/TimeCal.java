import java.util.Scanner;
import java.lang.Exception;

public class TimeCal{
    public static void main(String args[]){
        Scanner scan = new Scanner(System.in);

        int hr=0;
        int min=0;
        int sec=0;

        while(true){
            System.out.println("Enter . to stop");
            System.out.println("Input Format: HR:MIN:SEC");
            String str = scan.nextLine();
            String[] split = str.split(":");

            if(str.equals(".")){
                break;
            }

            try{
                sec+=Integer.parseInt(split[2]);
            }
            catch(ArrayIndexOutOfBoundsException e){
                System.out.println("Error");
                System.out.println("Include Hours Also");
                System.out.println("Ex:  00:12:42");
                return;
            }

            if(sec>60){
                min++;
                sec-=60;
            }

            min+=Integer.parseInt(split[1]);

            if(min>60){
                hr++;
                min-=60;
            }

            hr+=Integer.parseInt(split[0]);

            System.out.println("Hours\tMinute\tSeconds");
            System.out.println(hr+"\t"+min+"\t"+sec);
            System.out.println();


            if(str.equals(".")){
                break;
            }
        }

        System.out.println();
        System.out.println();
        System.out.println("Final Result");
        System.out.println("Hours\tMinute\tSeconds");
        System.out.println(hr+"\t"+min+"\t"+sec);
    }
}
