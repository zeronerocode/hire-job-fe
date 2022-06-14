import React from 'react'
import styles from './EditProfJobseeker.module.css'
import Navbar from '../../../components/module/navbar'
import JobSeekerAva from '../../../components/base/jobseekerAva/Image'
import Button from '../../../components/base/button'
import Footer from '../../../components/module/footer/Footer'
// import SkillTag from '../../../components/base/skillTag/SkillTag'
// import SocmedInfo from '../../../components/base/socmedInfo/SocmedInfo'
// import { Link, Outlet, NavLink } from 'react-router-dom'
import Input from '../../../components/base/input'
import Textarea from '../../../components/base/textarea/Textarea'

const EditProfJobseeker = () => {
    return (
        <div className={`${styles['profile-jobseeker']}`}>
            <Navbar 

            />
            <div className={`${styles['purple-bg']}`}></div>
            <div className={`${styles['profile-container']}`}>
                <div className={`${styles['side-profile']}`}>
                    <JobSeekerAva
                        source={'/assets/img/abramov.jpg'}
                        style={{
                            width: 150,
                            height: 150,
                            borderRadius: '50%',
                            overflow: 'hidden',
                            alignSelf: 'center'
                        }}
                    />
                    <p>Edit</p>
                    <div className={`${styles['about-profile']}`}>
                        <h3 className={`${styles.name}`}>Louis Tomlinson</h3>
                        <h6 className={`${styles.position}`}>Web Developer</h6>
                        <div className={`${styles.location}`}>
                            <img src="/assets/img/icons/map-pin.png" alt="" />
                            <p className={`${styles['text-location']}`}>Purwokerto, Jawa Tengah</p>
                        </div>
                        <p className={`${styles.status}`}>Freelancer</p>
                    </div>
                    <Button
                        title={`Simpan`}
                        type={'button'}
                        style={{
                            width: '297px',
                            height: '50px',
                            background: '#5E50A1',
                            borderRadius: '4px',
                            border: 'none',
                            color: '#FFF',
                            fontSize: '16px',
                            fontWeight: 700,
                            marginTop: '0px'
                        }}
                    />
                    <Button
                        title={`Batal`}
                        type={'button'}
                        style={{
                            width: '297px',
                            height: '50px',
                            background: 'none',
                            borderRadius: '4px',
                            border: '2px solid #5E50A1',
                            color: '#5E50A1',
                            fontSize: '16px',
                            fontWeight: 700,
                            marginTop: '20px'
                        }}
                    />
                </div>
                <div className={`${styles['profile-data']}`}>
                    <form className={`${styles['personal-data']}`}>
                        <h4>Data Diri</h4>
                        <hr />
                        <div className={`${styles['input-group']}`}>
                            <label htmlFor="">Nama Lengkap</label>
                            <Input
                                placeholder={'Masukkan nama lengkap'}
                                style={{
                                    height: 40,
                                    paddingLeft: 15,
                                    border: '1px solid #9EA0A5',
                                    borderRadius: '5px'
                                }}
                            />
                        </div>
                        <div className={`${styles['input-group']}`}>
                            <label htmlFor="">Job desk</label>
                            <Input
                                placeholder={'Masukkan job desk'}
                                style={{
                                    height: 40,
                                    paddingLeft: 15,
                                    border: '1px solid #9EA0A5',
                                    borderRadius: '5px'
                                }}
                            />
                        </div>
                        <div className={`${styles['input-group']}`}>
                            <label htmlFor="">Domisili</label>
                            <Input
                                placeholder={'Masukkan alamat domisili'}
                                style={{
                                    height: 40,
                                    paddingLeft: 15,
                                    border: '1px solid #9EA0A5',
                                    borderRadius: '5px'
                                }}
                            />
                        </div>
                        <div className={`${styles['input-group']}`}>
                            <label htmlFor="">Tempat Kerja</label>
                            <Input
                                placeholder={'Masukkan tempat kerja'}
                                style={{
                                    height: 40,
                                    paddingLeft: 15,
                                    border: '1px solid #9EA0A5',
                                    borderRadius: '5px'
                                }}
                            />
                        </div>
                        <div className={`${styles['input-group']}`}>
                            <Textarea
                                labelName={'Deskripsi Singkat'}
                                id={'personal'}
                            />
                        </div>
                    </form>
                    <form className={`${styles['skill']}`}>
                        <h4>Skill</h4>
                        <hr />
                        <div className={`${styles['input-group']} ${styles['input-skill']}`}>
                            <Input
                                placeholder={'Javascript'}
                                style={{
                                    height: 40,
                                    paddingLeft: 15,
                                    border: '1px solid #9EA0A5',
                                    borderRadius: '5px',
                                    // marginTop: '15px'
                                }}
                            />
                            <Button
                                title={`Simpan`}
                                type={'button'}
                                style={{
                                    // width: '297px',
                                    height: '40px',
                                    background: '#FBB017',
                                    borderRadius: '4px',
                                    border: 'none',
                                    color: '#FFF',
                                    fontSize: '14px',
                                    fontWeight: 700,
                                    // marginTop: '20px',
                                    padding: 10
                                }}
                            />
                        </div>
                    </form>
                    <form className={`${styles['experience']}`}>
                        <h4>Pengalaman Kerja</h4>
                        <hr />
                        <div className={`${styles['form-experience']}`}>
                            <div className={`${styles['input-group']}`}>
                                <label htmlFor="">Posisi</label>
                                <Input
                                    placeholder={'Web Developer'}
                                    style={{
                                        height: 40,
                                        paddingLeft: 15,
                                        border: '1px solid #9EA0A5',
                                        borderRadius: '5px'
                                    }}
                                />
                            </div>
                            <div className={`${styles['double-input-group']}`}>
                                <div className={`${styles['input-group']}`}>
                                    <label htmlFor="">Nama Perusahaan</label>
                                    <Input
                                        placeholder={'PT Nocturnal'}
                                        style={{
                                            height: 40,
                                            paddingLeft: 15,
                                            border: '1px solid #9EA0A5',
                                            borderRadius: '5px'
                                        }}
                                    />
                                </div>
                                <div className={`${styles['input-group']}`}>
                                    <label htmlFor="">Bulan/Tahun</label>
                                    <Input
                                        placeholder={'Web Developer'}
                                        style={{
                                            height: 40,
                                            paddingLeft: 15,
                                            border: '1px solid #9EA0A5',
                                            borderRadius: '5px'
                                        }}
                                        type={'month'}
                                    />
                                </div>
                            </div>
                            <div className={`${styles['input-group']}`}>
                                <Textarea
                                    labelName={'Deskripsi Singkat'}
                                    id={'experience'}
                                />
                            </div>
                        </div>
                        <hr />
                        <Button
                            title={`Tambah Pengalaman Kerja`}
                            type={'button'}
                            style={{
                                width: '100%',
                                height: '40px',
                                background: 'none',
                                borderRadius: '4px',
                                border: '1px solid #FBB017',
                                color: '#FBB017',
                                fontSize: '14px',
                                fontWeight: 700,
                                // marginTop: '20px',
                                padding: 10
                            }}
                        />
                    </form>
                    <form className={`${styles['portfolio']}`}>
                        <h4>Portfolio</h4>
                        <hr />
                        <div className={`${styles['form-experience']}`}>
                            <div className={`${styles['input-group']}`}>
                                <label htmlFor="">Nama Aplikasi</label>
                                <Input
                                    placeholder={'Masukkan nama aplikasi'}
                                    style={{
                                        height: 40,
                                        paddingLeft: 15,
                                        border: '1px solid #9EA0A5',
                                        borderRadius: '5px'
                                    }}
                                />
                            </div>
                            {/* <div className={`${styles['double-input-group']}`}> */}
                            <div className={`${styles['input-group']}`}>
                                <label htmlFor="">Link Repository</label>
                                <Input
                                    placeholder={'PT Nocturnal'}
                                    style={{
                                        height: 40,
                                        paddingLeft: 15,
                                        border: '1px solid #9EA0A5',
                                        borderRadius: '5px'
                                    }}
                                />
                            </div>
                        </div>
                        <div className={`${styles['input-group']}`}>
                            <div 
                                className={`${styles['drag-area']}`}
                                // onDragOver={''}
                            >
                                <div className={`${styles.icon}`}><i className="fas fa-cloud-upload-alt"></i></div>
                                <header>Drag & Drop untuk Upload Gambar Aplikasi Mobile</header>
                                <p>Atau cari untuk mengupload file dari direktorimu.</p>
                                <div className={`${styles['img-req']}`}>
                                    <div className={`${styles['img-format']}`}>
                                        <img src="/assets/img/icons/dummy-icon.png" alt=""
                                        />
                                        <p className={`${styles['format-text']}`}>High-Res Image PNG, JPG or GIF</p>
                                    </div>
                                    <div className={`${styles['img-size']}`}>
                                        <img src="/assets/img/icons/expand.png" alt=""
                                        />
                                        <p 
                                            className={`${styles['size-text']}`}
                                        >Size 1080x1920 or 600x800</p>
                                    </div>
                                </div>
                                {/* <span>OR</span> */}
                                <button>Browse File</button>
                                <input type="file" hidden />
                            </div>
                        </div>
                        {/* </div> */}
                        <hr />
                        <Button
                            title={`Tambah Portfolio`}
                            type={'button'}
                            style={{
                                width: '100%',
                                height: '40px',
                                background: 'none',
                                borderRadius: '4px',
                                border: '1px solid #FBB017',
                                color: '#FBB017',
                                fontSize: '14px',
                                fontWeight: 700,
                                // marginTop: '20px',
                                padding: 10
                            }}
                        />
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default EditProfJobseeker