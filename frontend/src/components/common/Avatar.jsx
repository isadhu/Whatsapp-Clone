'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { FaCamera } from 'react-icons/fa';

function Avatar({ type, image, setImage }) {
	const [hover, setHover] = useState(false);
	const [isContextMenuVisible, setIsContextMenuVisible] = useState(false);
	const [contextMenuCordinates, setIsContextMenuCordinates] = useState({
		x: 0,
		y: 0,
	});

	const showContextMenu = (e) => {
		e.preventDefault();
		setIsContextMenuCordinates({ x: e.pageX, y: e.pageY });
		setIsContextMenuVisible(true);
	};
	return (
		<>
			<div className='flex items-center justify-center'>
				{type === 'sm' && (
					<div className='relative h-10 w-10'>
						<Image src={image} alt='avatar' className='rounded-full' fill />
					</div>
				)}
				{type === 'lg' && (
					<div className='relative h-14 w-14'>
						<Image src={image} alt='avatar' className='rounded-full' fill />
					</div>
				)}
				{type === 'xl' && (
					<div
						className='relative cursor-pointer'
						onMouseEnter={() => setHover(true)}
						onMouseLeave={() => setHover(false)}>
						<div
							className={`z-10 bg-photopicker-overlay-background absolute h-60 w-60
                                top-0 left-0 flex items-center justify-center rounded-full 
                                flex-col text-center gap-2
                                ${hover ? 'visible' : 'hidden'}`}
							onClick={(e) => showContextMenu(e)}
							id='context-opener'>
							<FaCamera
								className='text-2xl'
								id='context-opener'
								onClick={(e) => showContextMenu(e)}
							/>
							<span onClick={(e) => showContextMenu(e)} id='context-opener'>
								Change Profile Photo
							</span>
						</div>
						<div className='flex items-center justify-center h-60 w-60'>
							<Image src={image} alt='avatar' className='rounded-full' fill />
						</div>
					</div>
				)}
			</div>
		</>
	);
}

export default Avatar;
