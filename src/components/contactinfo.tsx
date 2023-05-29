'use client';

export function Contactinfo(props: { contacts: string }) {
   const { contacts } = props;
  

    return (
      <div style={{ padding: "400px 100px 10px" }}>
        <a href={contacts}>yes</a>
      </div>
    );
  }
  