'use client';
import Image from 'next/image';
import React from 'react';

const TeamMember = (props: {
  image: any;
  name: any;
  position: any;
  id: any;
}) => {
  const { image, name, position, id } = props;
  return (
    <div className="team-member" key={id}>
      <div className="team-member--thumb">
        <Image
          height={288}
          width={288}
          src={image}
          alt={name}
          style={{
            maxWidth: '100%',
            height: 'auto',
          }}
        />
      </div>
      <div className="team-member--content">
        <h6>{name}</h6>
        <p>{position}</p>
      </div>
    </div>
  );
};

export default TeamMember;
