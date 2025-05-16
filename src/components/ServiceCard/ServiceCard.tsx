import React from 'react';
import { useCallback } from 'react';
import { Badge, Button, Card, CardContent, CardFooter } from '@/components';
import { SINERGIA_WHATSAPP_URL } from '@/lib/constants';
import { ArrowRightIcon } from 'lucide-react';
import { motion } from 'motion/react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  badges: string[];
  popular?: boolean;
}

export const ServiceCard = ({ service }: { service: Service }) => {
  const handleOnClick = useCallback(() => {
    window.open(SINERGIA_WHATSAPP_URL, '_blank', 'noopener,noreferrer');
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="h-full"
    >
      <Card
        className={`relative flex h-full flex-col overflow-hidden transition-all duration-300 hover:shadow-lg ${service.popular ? 'border-2 border-yellow-400' : ''}`}
      >
        <CardContent className="flex-grow p-6 md:p-8">
          <div
            className={`mb-4 flex h-12 w-12 items-center justify-center rounded-full ${service.color}`}
          >
            {service.icon}
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold">{service.title}</h3>
              {service.popular && (
                <Badge
                  variant="outline"
                  className="border-yellow-300 bg-yellow-100 text-yellow-800"
                >
                  Popular
                </Badge>
              )}
            </div>
            <p className="text-gray-600">{service.description}</p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative z-10 mt-6 flex flex-wrap gap-2"
          >
            {service.badges.map(badge => {
              const colorBase = service.color.match(/bg-([a-z]+)-\d+/)?.[1] || 'gray';

              return (
                <Badge
                  key={badge}
                  variant="secondary"
                  className={`bg-${colorBase}-100 hover:bg-${colorBase}-200 dark:bg-${colorBase}-900 dark:hover:bg-${colorBase}-800 text-${colorBase}-800 dark:text-${colorBase}-300 rounded-full px-4 py-2 text-sm transition-colors`}
                >
                  #{badge}
                </Badge>
              );
            })}
          </motion.div>
        </CardContent>
        <CardFooter className="mt-auto flex justify-center p-1">
          <Button className="cursor-pointer" onClick={handleOnClick}>
            Conocer más <ArrowRightIcon className="h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};
