import gsap from "gsap"
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);


export const animateWithGsap=(target, animationProps, scrollProps)=>{
    gsap.to(target,{
        ...animationProps,
        scrollTrigger:{
            trigger: target,
            toggleActions: 'restart reverse restart reverse',
            start: 'top 85%'
        }
    })
}




export const animateWithGsapTimeline = (timeLine, rotationRef,rotationState, firstTarget, secondTerget, animationProps) =>{
    timeLine.to(rotationRef.current.rotation,{
        y: rotationState,
        duration: 1,
        ease: 'power1.inOut'
    })

    timeLine.to(
        firstTarget,
        {
            ...animationProps,
            ease: 'power2.inOut'
        },
        '<'
    ),
    timeLine.to(
        secondTerget,
        {
            ...animationProps,
            ease: 'power2.inOut'
        },
        '<'
    )
    
}