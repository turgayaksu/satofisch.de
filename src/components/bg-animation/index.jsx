import SfShape from '../sf-shape';

export default function BgAnimation() {
  return (
    <div className='fixed inset-0 -z-10 overflow-hidden bg-sf-navy after:sf-canvas-after'>
      <SfShape sfclass='sf-scale' duration='10s' img='assets/img/14.png' />
      <SfShape sfclass='sf-bounce' duration='10s' img='assets/img/13.png' />
      <SfShape
        sfclass='sf-scale'
        opacity='.3'
        duration='8s'
        img='assets/img/12.png'
      />
      <SfShape sfclass='sf-scale' duration='6s' img='assets/img/11.png' />
      <SfShape sfclass='sf-bounce' duration='7s' img='assets/img/10.png' />
      <SfShape
        sfclass='sf-bounce'
        opacity='.8'
        duration='11s'
        img='assets/img/9.png'
      />
      <SfShape
        sfclass='sf-bounce'
        opacity='.8'
        duration='6s'
        img='assets/img/8.png'
      />
      <SfShape sfclass='sf-bounce' duration='14s' img='assets/img/7.png' />
      <SfShape
        sfclass='sf-bounce'
        opacity='.8'
        duration='9s'
        img='assets/img/6.png'
      />
      <SfShape opacity='.8' duration='10s' img='assets/img/5.png' />
      <SfShape sfclass='sf-bounce' duration='8s' img='assets/img/4.png' />
      <SfShape
        sfclass='sf-bounce'
        opacity='.8'
        duration='7s'
        img='assets/img/3.png'
      />
      <SfShape sfclass='sf-bounce' duration='14s' img='assets/img/2.png' />
      <SfShape
        sfclass='sf-bounce'
        opacity='.9'
        duration='10s'
        img='assets/img/1.png'
      />
      <div className='bg-sf-navy'></div>
    </div>
  );
}
