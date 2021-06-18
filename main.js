var images = ["Shaan.jpeg","Dad.jpeg","Mom.jpeg","Kavya.jpeg"];
            var names = ["Fmaily Book","Shaan Shreyas", "Pradeep Banwar", "Jyotsna Banwar", "Kavya Kanchan"];
            var i = 0;
            function update()
            {   
                document.getElementById("family_member_image").src = images[i];
                document.getElementById("family_member_name").innerHTML = names[i];

i++;
if(i==3)
{

    i=0;
}
            }
