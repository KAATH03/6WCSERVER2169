<template>
    <div class="photo-wrapper">
<img src="@/assets/PROFILE PIC.jpg" alt="My 2x2 Photo" class="profile-picture" />
</div> 

<div>
<h2>Profile</h2>
<p><strong>Name:</strong> Katherine G. Sanchez</p>
<p><strong>Birthday:</strong> January 3, 2004</p>
<p><strong>Address:</strong> Sto. Nino, San Luis Pampanga</p>
<p><strong>Course:</strong> Bachelor of Science in Information Technology</p>
<p><strong>Specialization:</strong> Website Development</p>
<p><strong>Objective:</strong> To obtain a challenging position as a Frontend Developer where I can contribute and grow my skills.</p>
</div>
</template>

<script>
export default {
name: 'Profile',
}
</script>

<style scoped>
.profile {
    background-color: #f9f9f9;
    padding: 25px;
    border: 1px solid #ddd;
    border-radius: 6px;
    font-family: 'Segoe Ui', Verdana, Geneva, Tahoma, sans-serif;
}
.profile-picture {
width: 150px; 
height: 150px;
object-fit: cover;
float: righ;
border-radius: 6px;
border: 2px solid #aaa;
}

.section {
text-align: left;
max-width: 500px;
margin: 0 auto;
}
h2 {
    border-bottom: 2px solid ccc;
    margin-bottom: 20px;
    color: #333;
}
.section p {
    margin-bottom: 10px;
    line-height: 1.6;
}
</style>