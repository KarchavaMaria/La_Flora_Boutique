import styles from './ProfileInfo.module.scss';
import iconEditExit from '../../../assets/icons/icon_exit_edit.png';
import iconEdit from '../../../assets/icons/icon_edit.png';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { setUser } from '../../../store/authSlice';
import {API_URL} from "../../../api/config";

const ProfileInfo = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const [edit, setEdit] = useState(false);

  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || '',
    city: user?.city || '',
    date: user?.date || '',
    family: user?.family || '',
  });

  useEffect(() => {
    setFormData({
      name: user?.name || '',
      email: user?.email || '',
      phone: user?.phone || '',
      city: user?.city || 'Kyiv',
      date: user?.date || '',
      family: user?.family || '',
    });
  }, [user?.id]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.put(`${ API_URL }/api/auth/update`, {
        id: user.id,
        name: formData.name,
        email: formData.email,
        phone: formData.phone || null,
        city: formData.city || null,
        date: formData.date || null,
        family: formData.family || null,
      });
      console.log('DATA FROM SERVER:', res.data);
      dispatch(setUser(res.data.user));
      setEdit(false);
    } catch (error) {
      console.error(
        'Error updating user:',
        error.response?.data || error.message
      );
    }
  };

  return (
    <div className={styles.profileInfo}>
      <div className={styles.profileUserInfo}>
        <div>
          <h3>User Info</h3>
        </div>
        <div className={styles.btnEdit}>
          {edit ? (
            <button className={styles.edit} onClick={() => setEdit(!edit)}>
              <img src={iconEditExit} alt="exit" />
            </button>
          ) : (
            <button className={styles.edit} onClick={() => setEdit(!edit)}>
              <img src={iconEdit} alt="edit" />
            </button>
          )}
        </div>
      </div>

      {edit ? (
        <div className={styles.formEdit}>
          <div className={styles.editInput}>
            <p>
              <strong>Name : </strong>
            </p>
            <input
              className={styles.inputText}
              type="text"
              name="name"
              placeholder="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className={styles.editInput}>
            <p>
              <strong>Family: </strong>
            </p>
            <input
              className={styles.inputText}
              type="text"
              name="family"
              placeholder="family"
              value={formData.family}
              onChange={handleChange}
            />
          </div>
          <div className={styles.editInput}>
            <p>
              <strong>Email : </strong>
            </p>
            <input
              className={styles.inputText}
              type="email"
              name="email"
              placeholder="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className={styles.editInput}>
            <p>
              <strong>Phone : </strong>
            </p>
            <input
              className={styles.inputText}
              type="phone"
              name="phone"
              placeholder="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className={styles.editInput}>
            <p>
              <strong>City : </strong>
            </p>
            <select
              className={styles.inputText}
              name="city"
              value={formData.city}
              onChange={handleChange}
            >
              <option value="Kyiv">Kyiv</option>
              <option value="Kharkiv">Kharkiv</option>
              <option value="Lviv">Lviv</option>
              <option value="Poltava">Poltava</option>
              <option value="Odesa">Odesa</option>
            </select>
          </div>
          <div className={styles.editInput}>
            <p>
              <strong>Date birthday : </strong>
            </p>
            <input
              className={styles.inputText}
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />
          </div>
          <button className={styles.btnSave} type="button" onClick={handleSave}>
            SAVE
          </button>
        </div>
      ) : (
        <div className={styles.containerInfo}>
          <p>
            <strong>Name : </strong> {user?.name}
          </p>
          <p>
            <strong>Family: </strong>
            {user?.family}
          </p>
          <p>
            <strong>Email : </strong> {user?.email}
          </p>
          <p>
            <strong>Phone : </strong>
            {user?.phone}
          </p>
          <p>
            <strong>City : </strong>
            {user?.city}
          </p>
          <p>
            <strong>Date birthday : </strong>
            {user?.date?.slice(0, 10)}
          </p>
        </div>
      )}
    </div>
  );
};
export default ProfileInfo;
