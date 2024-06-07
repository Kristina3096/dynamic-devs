import React, { useState } from "react";
import data from "../../data/index.json";
import "../../App.css";
import "./AboutUs.css";
import ConfirmDeleteModal from "../../ConfirmDeleteModal/ConfirmDeleteModal";
import NavigationBar from "../../components/Navbar/Navbar";

const AboutUs = () => {
  const [aboutUsData, setAboutUsData] = useState(data?.aboutUs || []);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [currentItem, setCurrentItem] = useState({ title: "", description: "", src: "" });
  const [editingIndex, setEditingIndex] = useState(null); // Indeksi i artikullit që po përditësohet

  const handleDelete = (index) => {
    setItemToDelete(index);
    setIsDeleteModalOpen(true);
  };

  const confirmDelete = () => {
    setAboutUsData(aboutUsData.filter((_, i) => i !== itemToDelete));
    setIsDeleteModalOpen(false);
    setItemToDelete(null);
  };

  const handleCancelDelete = () => {
    setIsDeleteModalOpen(false);
    setItemToDelete(null);
  };

  const handleCreate = () => {
    setAboutUsData([...aboutUsData, currentItem]);
    setCurrentItem({ title: "", description: "", src: "" });
  };

  const handleUpdate = () => {
    if (editingIndex !== null) {
      const updatedData = aboutUsData.map((item, i) =>
        i === editingIndex ? currentItem : item
      );
      setAboutUsData(updatedData);
      setIsEditing(false);
      setCurrentItem({ title: "", description: "", src: "" });
      setEditingIndex(null); // Rivendosim indeksin e përditësimit
    }
  };

  const handleEditClick = (index) => {
    setCurrentItem(aboutUsData[index]);
    setIsEditing(true);
    setEditingIndex(index); // Vendosim indeksin e përditësimit
  };

  return (
    <section className="portfolio--section" id="project">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <h2 className="section--heading">About Us</h2>
          <p className="section--description">
            "Each member of the team brings unique skills and ideas, contributing to the collective success of the group. Our diverse backgrounds and experiences allow us to approach challenges from different perspectives, fostering creativity and ingenuity in our solutions. With a commitment to continuous learning and improvement, we stay updated with the latest technologies and best practices, ensuring that our projects are not only cutting-edge but also efficient and scalable. At Dynamic Devs, we strive for excellence in everything we do, aiming to leave a lasting impact on the world of technology."
          </p>
        </div>
      </div>
      <div className="portfolio--section--container">
        {aboutUsData.map((item, index) => (
          <div key={index} className="portfolio--section--card">
            <div className="portfolio--section--img">
              <img src={item.src} alt="Placeholder" />
            </div>
            <div className="portfolio--section--card--content">
              <div>
                <h3 className="portfolio--section--title">{item.title}</h3>
                <p className="text-md">{item.description}</p>
              </div>
              <p className="text-sm portfolio--link">
                <button onClick={() => handleDelete(index)}>Delete</button>
                <button onClick={() => handleEditClick(index)}>Update</button>
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="form-container">
        <h3>{isEditing ? "Update profil" : "Create new profil"}</h3>
        <input
          type="text"
          placeholder="Title"
          value={currentItem.title}
          onChange={(e) => setCurrentItem({ ...currentItem, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          value={currentItem.description}
          onChange={(e) => setCurrentItem({ ...currentItem, description: e.target.value })}
        />
        <input
          type="text"
          placeholder="Image URL"
          value={currentItem.src}
          onChange={(e) => setCurrentItem({ ...currentItem, src: e.target.value })}
        />
        <button onClick={isEditing ? handleUpdate : handleCreate}>
          {isEditing ? "Update" : "Create"}
        </button>
      </div>

      <ConfirmDeleteModal
        isOpen={isDeleteModalOpen}
        onConfirm={confirmDelete}
        onCancel={handleCancelDelete}
      />
      <NavigationBar/>
    </section>
  );
};


export default AboutUs;
