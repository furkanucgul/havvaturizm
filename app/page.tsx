'use client'
import { TextField } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import { MdVisibilityOff, MdVisibility } from 'react-icons/md'

export default function Home() {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  return (
    <main className='w-full min-h-screen flex items-center justify-center'>
      <div className='flex flex-col justify-center items-center'>
        <div>
          <Image
            src='/havva_logo.png'
            width={400}
            height={90}
            alt='havva_logo'
          />
        </div>
        <div className='my-5'>
          <i className='text-sm'>Havva Turizm musteri takip sistemi</i>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <div className='w-full'>
            <TextField
              required
              id="outlined-required"
              label="Kullanici adiniz"
              fullWidth
            />
          </div>

          <div className='w-full'>
            <FormControl sx={{ mt: 1 }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
              <OutlinedInput
                fullWidth
                required
                id="outlined-adornment-password"
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
          </div>

          <div className='mt-3 w-full'>
            <button type="submit" className='py-2 px-4 bg-lime-600 hover:bg-lime-500 rounded-full w-full'>
              Giris
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
